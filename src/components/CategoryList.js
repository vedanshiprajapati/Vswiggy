import Menucard from "./Menucard";

const CategoryList = ({ props }) => {
  return (
    <div>
      {props.map((item) => (
        <Menucard props={item} />
      ))}
    </div>
  );
};

export default CategoryList;
