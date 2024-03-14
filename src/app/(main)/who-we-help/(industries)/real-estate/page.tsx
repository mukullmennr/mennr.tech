import React from "react";
import {
    breadcrumb,
    faq,
    main,
    importance,
    getInTouch,
    yourCertifications,
    sample,
} from "@/data/industries/real-estate/data";
import { table } from "@/data/industries/table";
import FAQ from "@/components/FAQ/FAQ";
import Main from "../../component/industries/main/Main";
import Importance from "../../component/industries/importance/Importance";
import GetInTouch from "../../component/industries/get-in-touch/GetInTouch";
import Table from "../../component/industries/table/Table";
import Certification from "../../component/industries/certification/Certification";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Sample_page from "@/app/(main)/component/sample_page/Sample_page";
export default function page() {
    return (
        <>
            <Main data={main} breadcrumb={breadcrumb} imgClass="real-estate" />
            <Importance data={importance} />
            <Certification data={yourCertifications} />
            <Table data={table} />
            <GetInTouch data={getInTouch} />
            <Sample_page data={sample} />
            <FAQ ques={faq.data}>{faq.heading}</FAQ>
            <Breadcrumb data={breadcrumb} classname="bottom" />
        </>
    );
}
