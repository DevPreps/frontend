import React from "react";

import { Box } from "@mui/material";

//Import team detail child component
import TeamDetail from "./TeamDetail";

//import dummy data from TeamDetail component
const TeamCards: React.FC = () => {
    const teamDetails = [1, 2, 3, 4, 5, 6];
    return (
        <Box sx={styles.container}>
            {teamDetails.map((teamDetail) => (
                <TeamDetail key={teamDetail} />
            ))}
        </Box>
    );
};

export default TeamCards;

const styles = {
    container: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
};
