import Menucard from "./Menucard";

const MenucardList = ({ props }) => {
  return (
    <div>
      {props.map((item) => (
        <Menucard key={item?.card?.info?.id} props={item} />
      ))}
    </div>
  );
};

export default MenucardList;
