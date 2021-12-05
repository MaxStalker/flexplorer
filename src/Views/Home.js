import {router, views} from "./index";

const Home = () => {
  return (
    <div>
      <button onClick={()=>{
        router.setView(views.account, {
            address: "bjarte.find"
        })
      }
      }>Redirect</button>
      <ul>
        <li>
          <a href={"/account/0x56f61fc020ed9afb"}>Bjarte Flow Format</a>
        </li>
        <li>
          <a href={"/account/find:bjarte"}>Bjarte Find Prefix</a>
        </li>
        <li>
          <a href={"/account/bjarte.find"}>Bjarte Find Suffix</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
