import Newarrivals from "./components/Newarrivals";
import Topselling from "./components/Topselling";
import Browsestyle from "./components/browsestyle";
import Customers from "./components/customers";
import Homecontainer from "./components/Homecontainer";

export default function Home() {
  return (
    <>
        <Homecontainer />
        <Newarrivals />
        <Topselling />
        <Browsestyle />
        <Customers />
      </>
  );
}
