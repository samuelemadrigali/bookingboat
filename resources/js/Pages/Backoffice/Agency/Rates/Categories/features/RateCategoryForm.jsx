import { useForm, usePage } from "@inertiajs/react";
import useLocalization from "@/hooks/useLocalization";
import {
    Row,
    Column,
    Tabs,
    Button,
    Switch,
    InputLabel,
    InputError,
    Flag,
} from "@/Components/ui";

export default function RateCategoryForm() {
    const { t } = useLocalization();
    const { company, rateCategory, shop_actived_languages } = usePage().props;

    const multiLangInitialData = shop_actived_languages.reduce((acc, lang) => {
        acc[lang] = "";
        return acc;
    }, {});

    const { data, setData, submit, errors } = useForm(() => {
        if (rateCategory) {
            return rateCategory;
        }

        return {
            name: multiLangInitialData,
            is_range_age: false,
            is_free: false,
            min_age: "",
            max_age: "",
        };
    });

    const action = rateCategory
        ? route("agency.rate-categories.update", {
              company: company.slug,
              rateCategory: rateCategory.id,
          })
        : route("agency.rate-categories.store", { company: company.slug });

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
                        label={t("rate_categories.fields.name")}
                        lang={lang}
                        required
                    />
                </Column>
            </Row>
        ),
        footer: (
            <>
                <InputError message={errors[`name.${lang}`]} />
            </>
        ),
    }));

    return (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <Row>
                <Column>
                    <Tabs data={tabs} />
                </Column>

                <Column spansSm={6}>
                    <Column>
                        <InputLabel
                            id="min_age"
                            name="min_age"
                            type="number"
                            value={data.min_age}
                            onChange={handleOnChange}
                            label={t("rate_categories.fields.min_age")}
                            min={0}
                        />
                        <InputError message={errors.min_age} />
                    </Column>
                </Column>

                <Column spansSm={6}>
                    <Column>
                        <InputLabel
                            id="max_age"
                            name="max_age"
                            type="number"
                            value={data.max_age}
                            onChange={handleOnChange}
                            label={t("rate_categories.fields.max_age")}
                            min={0}
                        />
                        <InputError message={errors.max_age} />
                    </Column>
                </Column>
                <Column>
                    <Switch
                        id="is_free"
                        name="is_free"
                        checked={data.is_free}
                        onChange={() => setData("is_free", !data.is_free)}
                        label={t("rate_categories.fields.is_free")}
                    />
                    <InputError message={errors.is_free} />
                </Column>
            </Row>
            <Button type="submit">{t("form.save")}</Button>
        </form>
    );
}
