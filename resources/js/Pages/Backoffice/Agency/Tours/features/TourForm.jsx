import { useForm, usePage } from "@inertiajs/react";
import useLocalization from "@/hooks/useLocalization";
import {
    Row,
    Column,
    Tabs,
    Button,
    Uploader,
    Textarea,
    Switch,
    InputLabel,
    DataSelect,
    InputError,
    Flag,
} from "@/Components/ui";

export default function TourForm() {
    const { t } = useLocalization();
    const { company, tour, fleets, shop_actived_languages } = usePage().props;

    const fleetOptions = fleets.map((fleet) => ({
        value: fleet.id,
        label: fleet.name.it,
    }));

    const multiLangInitialData = shop_actived_languages.reduce((acc, lang) => {
        acc[lang] = "";
        return acc;
    }, {});

    const { data, setData, submit, errors, transform } = useForm(() => {
        if (tour) {
            return { ...tour, fleets: tour.fleets.map((fleet) => fleet.id) };
        }

        return {
            name: multiLangInitialData,
            description: multiLangInitialData,
            image: null,
            is_active: true,
            location_from: "",
            location_to: "",
            start_time: "",
            end_time: "",
            fleets: [],
        };
    });

    const action = tour
        ? route("agency.tours.update", {
              company: company.slug,
              tour: tour.id,
          })
        : route("agency.tours.store", { company: company.slug });

    transform((data) => {
        if (data.image !== null && data.image instanceof File === false) {
            delete data.image;
        }
        return data;
    });

    function handleSubmit(e) {
        e.preventDefault();

        submit("post", action);
    }

    function handleOnChange(e) {
        setData(e.target.name, e.target.value);
    }

    function handleMultiLanguageField(e) {
        setData(e.target.name, {
            ...data[e.target.name],
            [e.target.dataset.lang]: e.target.value,
        });
    }

    function handleDataSelectChange(name, selected) {
        setData(
            name,
            selected.map((item) => item.value)
        );
    }

    const tabs = shop_actived_languages.map((lang) => ({
        title: <Flag lang={lang} />,
        description: (
            <Row>
                <Column>
                    <InputLabel
                        id="name"
                        name="name"
                        value={data?.name[lang]}
                        onChange={handleMultiLanguageField}
                        label={t("tours.fields.name")}
                        lang={lang}
                        required
                    />
                </Column>
                <Column>
                    <Textarea
                        id="description"
                        name="description"
                        value={data?.description[lang]}
                        onChange={handleMultiLanguageField}
                        label={t("tours.fields.description")}
                        lang={lang}
                    />
                </Column>
            </Row>
        ),
        footer: (
            <>
                <InputError message={errors[`name.${lang}`]} />
                <InputError message={errors[`description.${lang}`]} />
            </>
        ),
    }));

    return (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <Row>
                <Column>
                    <Tabs data={tabs} />
                </Column>
                <Column>
                    <Uploader
                        id="image"
                        name="image"
                        value={data.image}
                        uploadedImage={data.image}
                        variant="single"
                        onChange={(files) => setData("image", files[0] || null)}
                        label={t("tours.fields.image")}
                    />
                    <InputError message={errors.image} />
                </Column>
                <Column spansSm={6}>
                    <Row>
                        <Column>
                            <InputLabel
                                id="location_from"
                                name="location_from"
                                value={data.location_from}
                                onChange={handleOnChange}
                                label={t("tours.fields.location_from")}
                                required
                            />
                            <InputError message={errors.location_from} />
                        </Column>
                        <Column>
                            <InputLabel
                                id="location_to"
                                name="location_to"
                                value={data.location_to}
                                onChange={handleOnChange}
                                label={t("tours.fields.location_to")}
                                required
                            />
                            <InputError message={errors.location_to} />
                        </Column>
                    </Row>
                </Column>
                <Column spansSm={6}>
                    <Row>
                        <Column>
                            <InputLabel
                                id="start_time"
                                name="start_time"
                                type="time"
                                value={data.start_time}
                                onChange={handleOnChange}
                                label={t("tours.fields.start_time")}
                                required
                            />
                            <InputError message={errors.start_time} />
                        </Column>
                        <Column>
                            <InputLabel
                                id="end_time"
                                name="end_time"
                                type="time"
                                value={data.end_time}
                                onChange={handleOnChange}
                                label={t("tours.fields.end_time")}
                                required
                            />
                            <InputError message={errors.end_time} />
                        </Column>
                    </Row>
                </Column>
                <Column>
                    <DataSelect
                        id="fleets"
                        name="fleets"
                        label={t("tours.fields.fleets")}
                        onChange={(selected) =>
                            handleDataSelectChange("fleets", selected)
                        }
                        options={fleetOptions}
                        defaultValue={fleetOptions.filter((fleet) =>
                            data.fleets.includes(fleet.value)
                        )}
                        isMulti={true}
                        required
                    />
                    <InputError message={errors.fleets} />
                </Column>
                <Column>
                    <Switch
                        id="is_active"
                        name="is_active"
                        checked={data.is_active}
                        onChange={() => setData("is_active", !data.is_active)}
                        label={t("tours.fields.is_active")}
                    />
                    <InputError message={errors.is_active} />
                </Column>
            </Row>
            <Button type="submit">{t("form.save")}</Button>
        </form>
    );
}
