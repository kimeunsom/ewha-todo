import { getDate } from "../utils/getDate";
const Header = () => {
  const today = new Date();
 
  return (
    <div className="flex justify-between mt-14">
      <div className="flex-col text-2xl font-semibold">
        <h1>{getDate(today)}</h1>
        <div className="flex items-center">
          <h1>오늘의 날씨</h1>
          <h1>아이콘</h1>
        </div>
      </div>
      <div className="w-16">
        <img alt="rocket" src="/Emoji.png" />
      </div>
    </div>
  );
};

export default Header;