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
    InputError,
    Flag,
} from "@/Components/ui";

export default function FleetForm() {
    const { t } = useLocalization();
    const { company, fleet, shop_actived_languages } = usePage().props;

    const multiLangInitialData = shop_actived_languages.reduce((acc, lang) => {
        acc[lang] = "";
        return acc;
    }, {});

    const { data, setData, submit, errors, transform } = useForm(() => {
        if (fleet) return fleet;

        return {
            name: multiLangInitialData,
            description: multiLangInitialData,
            image: null,
            capacity: 1,
            is_active: true,
        };
    });

    const action = fleet
        ? route("agency.fleet.update", {
              company: company.slug,
              fleet: fleet.id,
          })
        : route("agency.fleet.store", { company: company.slug });

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
                        label={t("fleets.fields.name")}
                        lang={lang}
                        required
                    />
                    <InputError message={errors[`name.${lang}`]} />
                </Column>
                <Column>
                    <Textarea
                        id="description"
                        name="description"
                        value={data?.description[lang]}
                        onChange={handleMultiLanguageField}
                        label={t("fleets.fields.description")}
                        lang={lang}
                    />
                    <InputError message={errors[`description.${lang}`]} />
                </Column>
            </Row>
        ),
    }));

    return (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <Row>
                <Column spansSm={6}>
                    <Tabs data={tabs} />
                </Column>
                <Column spansSm={6}>
                    <Uploader
                        id="image"
                        name="image"
                        value={data.image}
                        uploadedImage={data.image}
                        onChange={(files) => setData("image", files[0] || null)}
                        label={t("fleets.fields.image")}
                    />
                    <InputError message={errors.image} />
                </Column>
                <Column spansSm={6}>
                    <InputLabel
                        id="capacity"
                        name="capacity"
                        type="number"
                        min={1}
                        value={data.capacity}
                        onChange={handleOnChange}
                        label={t("fleets.fields.capacity")}
                        required
                    />
                    <InputError message={errors.capacity} />
                </Column>
                <Column spansSm={6}>
                    <Switch
                        id="is_active"
                        name="is_active"
                        checked={data.is_active}
                        onChange={() => setData("is_active", !data.is_active)}
                        label={t("fleets.fields.is_active")}
                    />
                    <InputError message={errors.is_active} />
                </Column>
            </Row>
            <Button type="submit">{t("form.save")}</Button>
        </form>
    );
}
