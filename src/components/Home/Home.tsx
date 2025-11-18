import { HomeContent } from "./HomeContent";
import { PostCard } from "./PostCard";
export const Home = () => {
  return (
    <div>
      <div>
        {HomeContent.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

