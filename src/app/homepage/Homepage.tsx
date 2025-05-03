import Homecontainer from "./homepage-components/Homecontainer"
import Newarrivals from "./homepage-components/Newarrivals"
import Topselling from "./homepage-components/Topselling"
import Browsestyle from "./homepage-components/browsestyle"
import Customers from "./homepage-components/customers"

export default () => {
    return(
        <>
        <Homecontainer />
        <Newarrivals />
        <Topselling />
        <Browsestyle />
        <Customers />
        </>
    )
}
