import { CircleTriangleRight, Search } from "akar-icons";
import { FC } from "react";

interface ArticleSlideItemProps {
  image: string;
}

const ArticleSlideItem: FC<ArticleSlideItemProps> = ({ image }) => {
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
