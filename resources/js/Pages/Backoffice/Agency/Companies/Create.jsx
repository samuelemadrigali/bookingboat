import { Head, useForm } from "@inertiajs/react";
import NavbarLogin from "@/Components/navbar/NavbarLogin";
import Footer from "@/Components/footer/Footer";
import {
    Row,
    Column,
    Card,
    Heading,
    InputLabel,
    InputError,
    Button,
} from "@/Components/ui";
import useLocalization from "@/hooks/useLocalization";

export default function CreateCompany() {
    const { t } = useLocalization();
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        country: "",
        city: "",
        province: "",
        address: "",
        zip: "",
        phone: "",
        website: "",
        company_name: "",
        vat: "",
        pec: "",
        sdi_code: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("agency.company.store"));
    };

    return (
        <>
            <Head title={t("company.create")} />
            <NavbarLogin />
            <main className="grow bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40 flex flex-col justify-center">
                <div className="relative py-12">
                    <div className="container xl:max-w-6xl mx-auto px-6">
                        <div className="flex flex-wrap flex-row justify-center">
                            <div className="w-full">
                                <Heading variant="h3" className="mb-6">
                                    {t("company.create")}
                                </Heading>
                                <Card className="relative p-6">
                                    <form
                                        onSubmit={submit}
                                        noValidate
                                        className="space-y-4"
                                    >
                                        <p className="text-xl font-bold border-b pb-2">
                                            {t("company.data")}
                                        </p>
                                        <Row>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="name"
                                                    label={t(
                                                        "company.form.name"
                                                    )}
                                                    name="name"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <InputError
                                                    message={errors.name}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="country"
                                                    label={t(
                                                        "company.form.country"
                                                    )}
                                                    name="country"
                                                    value={data.country}
                                                    onChange={(e) =>
                                                        setData(
                                                            "country",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <InputError
                                                    message={errors.country}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="city"
                                                    label={t(
                                                        "company.form.city"
                                                    )}
                                                    name="city"
                                                    value={data.city}
                                                    onChange={(e) =>
                                                        setData(
                                                            "city",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <InputError
                                                    message={errors.city}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="province"
                                                    label={t(
                                                        "company.form.province"
                                                    )}
                                                    name="province"
                                                    value={data.province}
                                                    onChange={(e) =>
                                                        setData(
                                                            "province",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <InputError
                                                    message={errors.province}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="address"
                                                    label={t(
                                                        "company.form.address"
                                                    )}
                                                    name="address"
                                                    value={data.address}
                                                    onChange={(e) =>
                                                        setData(
                                                            "address",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <InputError
                                                    message={errors.address}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="zip"
                                                    label={t(
                                                        "company.form.zip"
                                                    )}
                                                    name="zip"
                                                    value={data.zip}
                                                    onChange={(e) =>
                                                        setData(
                                                            "zip",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <InputError
                                                    message={errors.zip}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="phone"
                                                    label={t(
                                                        "company.form.phone"
                                                    )}
                                                    name="phone"
                                                    value={data.phone}
                                                    onChange={(e) =>
                                                        setData(
                                                            "phone",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <InputError
                                                    message={errors.phone}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="website"
                                                    label={t(
                                                        "company.form.website"
                                                    )}
                                                    name="website"
                                                    value={data.website}
                                                    onChange={(e) =>
                                                        setData(
                                                            "website",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <InputError
                                                    message={errors.website}
                                                />
                                            </Column>
                                        </Row>
                                        <p className="text-xl font-bold border-b pb-2">
                                            {t("company.billing_data")}
                                        </p>
                                        <Row>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="company_name"
                                                    label="Company Name"
                                                    name="company_name"
                                                    value={data.company_name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "company_name",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <InputError
                                                    message={
                                                        errors.company_name
                                                    }
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="vat"
                                                    label={t(
                                                        "company.form.vat"
                                                    )}
                                                    name="vat"
                                                    value={data.vat}
                                                    onChange={(e) =>
                                                        setData(
                                                            "vat",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <InputError
                                                    message={errors.vat}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="pec"
                                                    label={t(
                                                        "company.form.pec"
                                                    )}
                                                    name="pec"
                                                    value={data.pec}
                                                    onChange={(e) =>
                                                        setData(
                                                            "pec",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.pec}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="sdi_code"
                                                    label={t(
                                                        "company.form.sdi"
                                                    )}
                                                    name="sdi_code"
                                                    value={data.sdi_code}
                                                    onChange={(e) =>
                                                        setData(
                                                            "sdi_code",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.sdi_code}
                                                />
                                            </Column>
                                        </Row>
                                        <Button
                                            className="mt-4"
                                            type="submit"
                                            processing={processing}
                                        >
                                            {t("form.create")}
                                        </Button>
                                    </form>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
