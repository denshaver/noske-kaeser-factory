import { CircleTriangleRight, Search } from "akar-icons";

const ArticleSlideItem = ({ image }) => {
  return (
    <div className="articles-carousel-card">
      <div className="article-card-overlap"></div>
      <img src={image} alt="" />
      <Search strokeWidth={3} size={22} />
      <span>
        Mehr erfahren <CircleTriangleRight strokeWidth={2} size={16} />
      </span>
    </div>
  );
};

export default ArticleSlideItem;
