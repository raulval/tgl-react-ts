import { yupResolver } from "@hookform/resolvers/yup";
import { NavBar } from "components";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdEast } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { user } from "services";
import { IBodyEditUserInfo } from "shared/interfaces";
import { getUser, selectUser } from "store/userSlice";
import * as yup from "yup";
import profilePic from "../../assets/profile.png";
import {
  AccountCard,
  AccountContainer,
  AccountPicture,
  AccountPictureWrapper,
  EditText,
  EmailInput,
  EmailText,
  FormEdit,
  NameInput,
  NameText,
  Separator,
  SubmitButton,
} from "./styles";

const validation = yup.object({
  name: yup.string().required("Name is required").min(3, "Name is too short"),
  email: yup.string().required("Email is required").email("Invalid Email"),
});

const Account = () => {
  const { editUserInfo } = user();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogged, userData } = useSelector(selectUser);

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
      toast.error("You must be logged in to see this page", {
        toastId: "loginError1",
      });
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBodyEditUserInfo>({
    resolver: yupResolver(validation),
  });

  const onSubmitForm = async ({ name, email }: IBodyEditUserInfo) => {
    try {
      const response = await toast.promise(editUserInfo({ name, email }), {
        pending: "Editing...",
        success: "Name and email edited successfully",
      });
      console.log(response.data);

      dispatch(getUser(response.data));
    } catch (error: any) {
      console.log(error);

      toast.error(error.response.data.errors[0].message);
    }
  };

  return (
    <AccountContainer>
      <NavBar />
      <AccountCard>
        <AccountPictureWrapper>
          <AccountPicture src={profilePic} />
        </AccountPictureWrapper>
        <NameText>{userData.user.name}</NameText>
        <EmailText>{userData.user.email}</EmailText>
        <Separator />
        <EditText>Edit your informations</EditText>
        <FormEdit onSubmit={handleSubmit(onSubmitForm)}>
          <NameInput
            placeholder="Change name"
            type="text"
            value={userData.user.name}
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <EmailInput
            placeholder="Change email"
            type="email"
            value={userData.user.email}
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <SubmitButton type="submit">
            Edit <MdEast />
          </SubmitButton>
        </FormEdit>
      </AccountCard>
    </AccountContainer>
  );
};

export default Account;
