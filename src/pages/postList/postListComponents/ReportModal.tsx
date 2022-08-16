import React from "react";
import { SubmitHandler } from "react-hook-form";

// import form data interface and validation schema
import { IReportFormInputs } from "../../../forms/IFormInputs";

// import form component and defaultValues
import PostModalLayout from "./PostModalLayout";
import ReportForm from "../../../forms/ReportForm";
import Typography from "@mui/material/Typography";

const ReportModal = () => {
    // TODO, the reportUrl should be updated
    const formDefaultValues = {
        reportedUrl: "#",
        message: "",
        violationType: "other",
    };

    // TODO - handle form submission
    const onSubmit: SubmitHandler<IReportFormInputs> = (
        data: IReportFormInputs
    ) => {
        console.log("data", data);
    };

    return (
        <PostModalLayout operation="REPORT">
            <Typography variant="subtitle1" sx={styles.subtitle}>
                We appreciate you reporting any inappropriate content that
                violates our
                <a href="#"> code of conduct</a> or{" "}
                <a href="#">terms and conditions</a>. We are trying our best to
                make our site a great one for every dev.
            </Typography>
            <ReportForm
                onSubmit={onSubmit}
                formDefaultValues={{ ...formDefaultValues }}
            />
        </PostModalLayout>
    );
};

const styles = {
    subtitle: {
        px: 2,
        pb: 4,
    },
};

export default ReportModal;
