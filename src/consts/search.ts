import { Option } from "../components/select.component"

export const LOCATIONS: Option[] = [
    {
        value: "new-york",
        description: "New York"
    },
    {
        value: "orlando",
        description: "Orlando"
    },
    {
        value: "barbados",
        description: "Barbados"
    },
    {
        value: "toronto",
        description: "Toronto"
    }
];

export const FACILITIES: string[] = [
    "Bar",
    "Fitness Centre/Gym",
    "Internet Access",
    "Laundry Service",
    "Restaurant",
    "Room Service",
    "Safety Deposit Box",
    "Spa",
    "Swimming Pool",
    "Valet parking"
];

export const HOME_PAGE_HEADING_TEXT: string = "Holiday Search Test";
export const HOME_PAGE_DESC_1: string = "We have provided a simple search panel for testing using `preact-router`.";
export const HOME_PAGE_DESC_2: string = "We have made the request to our search service and added a proxy in the `/results` route in `src/routes/results.route.tsx`.<";

