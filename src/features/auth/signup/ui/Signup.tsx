import { BASE_URL } from "@/shared/api/BASE";
import Button from "@/shared/ui/Button/Button";
import Input from "@/shared/ui/Input/input";
import Arrow from "@/shared/ui/icons/main/arrow";
import Eye from "@/shared/ui/icons/signup/eye";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
  confirm_password: string;
  role_id: number;
}

export const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirm_password: "",
    role_id: 0,
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isChecked) {
      console.error("You must agree to the terms of the user agreement.");
      return;
    }
    try {
      const response = await axios.post(`${BASE_URL}/auth/signup/`, formData);
      console.log("Registration successful!", response.data);
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <main className="flex items-center">
      <div className="px-[86px] w-full">
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-[10px] py-[42px] px-6 border-[1px] border-solid border-black"
        >
          <h1 className="text-darkblue text-[36px] font-medium mb-11">
            Registration
          </h1>
          <div className="border-[1px] border-primary rounded-[5px] mb-5 py-[15px] px-5 flex items-center justify-between">
            <span className="text-lg text-darkblue font-custom">Who?</span>
            <Arrow />
          </div>
          <Input
            onChange={handleChange}
            name="email"
            value={formData.email}
            type="email"
            placeholder="Your email"
            classField="border-[1px] mb-5 flex items-center py-3 px-5 justify-between border-solid border-primary rounded-[5px] "
            className="w-full text-blue_rgb text-lg font-custom"
          ></Input>
          <Input
            onChange={handleChange}
            name="password"
            value={formData.password}
            type="password"
            placeholder="Password"
            classField="border-[1px] mb-5 flex items-center py-3 px-5 justify-between border-solid border-primary rounded-[5px] "
            className="w-full text-blue_rgb text-lg font-custom"
          >
            <Eye />
          </Input>
          <Input
            onChange={handleChange}
            name="confirm_password"
            type="password"
            value={formData.confirm_password}
            placeholder="Confirm password"
            classField="mb-5 border-[1px] flex items-center py-3 px-5 justify-between border-solid border-primary rounded-[5px] "
            className="w-full text-blue_rgb text-lg font-custom"
          >
            <Eye />
          </Input>
          <label className="mb-8 items-center flex justify-start gap-[15px]">
            <input
              type="checkbox"
              className="w-[30px] h-[30px]"
              style={{ width: "30px" }}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p className="whitespace-nowrap text-darkblue text-[16px] font-medium">
              I agree to the terms of the{" "}
              <span className="text-primary underline text-[16px] font-medium">
                user agreement
              </span>
            </p>
          </label>
          <Button
            type="submit"
            className="rounded-[10px] w-full mb-6 text-[16px] text-white bg-primary py-[18px] px-6 font-medium"
          >
            Create an account
          </Button>
          <p className="text-[16px] font-medium text-darkblue text-center">
            Already have an account?{" "}
            <Link
              className="text-primary font-medium text-[16px] underline"
              to={"/signin"}
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
      <div className="bg-center w-full">
        <img src="/Narim.png" className="w-full" alt="Narim" />
      </div>
    </main>
  );
};
