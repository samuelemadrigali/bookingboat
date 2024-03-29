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

export default function CreateCompany({ auth }) {
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
            <Head title="Company Create" />
            <NavbarLogin />
            <main className="grow bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40 flex flex-col justify-center">
                <div className="relative py-12">
                    <div className="container xl:max-w-6xl mx-auto px-6">
                        <div className="flex flex-wrap flex-row justify-center">
                            <div className="w-full">
                                <Heading variant="h3" className="mb-6">
                                    Create Company
                                </Heading>
                                <Card className="relative p-6">
                                    <form
                                        onSubmit={submit}
                                        noValidate
                                        className="space-y-4"
                                    >
                                        <p className="text-xl font-bold border-b pb-2">
                                            Company Data
                                        </p>
                                        <Row>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="name"
                                                    label="Name"
                                                    name="name"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.name}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="country"
                                                    label="Country"
                                                    name="country"
                                                    value={data.country}
                                                    onChange={(e) =>
                                                        setData(
                                                            "country",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.country}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="city"
                                                    label="City"
                                                    name="city"
                                                    value={data.city}
                                                    onChange={(e) =>
                                                        setData(
                                                            "city",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.city}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="province"
                                                    label="Province"
                                                    name="province"
                                                    value={data.province}
                                                    onChange={(e) =>
                                                        setData(
                                                            "province",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.province}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="address"
                                                    label="Address"
                                                    name="address"
                                                    value={data.address}
                                                    onChange={(e) =>
                                                        setData(
                                                            "address",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.address}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="zip"
                                                    label="Zip"
                                                    name="zip"
                                                    value={data.zip}
                                                    onChange={(e) =>
                                                        setData(
                                                            "zip",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.zip}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="phone"
                                                    label="Phone"
                                                    name="phone"
                                                    value={data.phone}
                                                    onChange={(e) =>
                                                        setData(
                                                            "phone",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.phone}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="website"
                                                    label="Website"
                                                    name="website"
                                                    value={data.website}
                                                    onChange={(e) =>
                                                        setData(
                                                            "website",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.website}
                                                />
                                            </Column>
                                        </Row>
                                        <p className="text-xl font-bold border-b pb-2">
                                            Billing Data
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
                                                    label="VAT"
                                                    name="vat"
                                                    value={data.vat}
                                                    onChange={(e) =>
                                                        setData(
                                                            "vat",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.vat}
                                                />
                                            </Column>
                                            <Column spansSm={6}>
                                                <InputLabel
                                                    id="pec"
                                                    label="PEC"
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
                                                    label="SDI Code"
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
                                            Create
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
