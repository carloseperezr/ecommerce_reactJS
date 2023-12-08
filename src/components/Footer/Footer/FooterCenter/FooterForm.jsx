import { Button } from "../../../Button/Button";

export const FooterForm = () => {
  const buttonClasses = "rounded-full bg-slate-600 font-bold w-6/12 py-2  ";

  return (
    <form className="flex flex-col items-center">
      <label htmlFor="" className="text-center py-1">
        Subscribe to our newsletter
      </label>
      <input
        className="py-1 my-2 w-9/12 border-solid placeholder:text-center placeholder:text-xs text-center text-slate-800"
        type="email"
        placeholder="Enter your email to get the latest news"
      />
      <Button classes={buttonClasses} text="Suscribe" />
    </form>
  );
};
