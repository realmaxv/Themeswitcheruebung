import { useContext } from "react";
import { themeContext } from "../components/ThemeContext";

const HomePage = () => {
  const { theme, themeIncrement, title } = useContext(themeContext);

  return (
    <div
      className={
        "h-screen flex flex-col items-start p-6 gap-8 justify-center " + theme
      }
    >
      <button
        onClick={themeIncrement}
        className={`py-2 px-4 border rounded-[10px] bg-black text-stone-50 cursor-pointer shadow hover:shadow-2xl shadow-black`}
      >{`Switch Theme (current: ${title})`}</button>
      <h1 className=" text-4xl font-bold">Eine gute Überschrift</h1>
      <p className="">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque cum,
        facilis praesentium perferendis eos magnam fugit ullam rem sunt! At,
        minima. Obcaecati sed eos consequatur consequuntur in eius, eveniet
        corrupti! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Velit, quidem, nostrum porro aut ipsam dolorum maxime officiis delectus
        dolor odio distinctio consequatur reiciendis rerum saepe qui possimus,
        nihil itaque sint. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Quisquam obcaecati nobis odit, nemo quod eius incidunt earum!
        Blanditiis deserunt omnis molestias aut quis sint totam, quasi obcaecati
        veniam quo. Praesentium?
      </p>
    </div>
  );
};

export default HomePage;
