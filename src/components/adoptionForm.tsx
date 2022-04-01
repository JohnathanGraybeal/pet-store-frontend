import React from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

interface AdoptionFormProps {
  firstName?: String;
  lastName?: String;
  email?: String; 
  phoneNumber?: String;
  address?: String;
  city?: String;
  state?: String;
  zipCode?: String;
}

var styles = {
    formStyle: {
        padding: 15,
        backgroundColor: "skyblue",
        borderRadius: 10,
        color: "black",
    },

    labelStyle: {
      padding: 5,
      margin: 5,
      fontSize: 20,
      color: "DimGray",
  },
    
    inputStyle: {
        padding: 5,
        margin: 5,
        placeholderTextColor: "pink",
        borderRadius: 5,
    },

    longInputStyle: {
        padding: 5,
        margin: 5,
        placeholderTextColor: "pink",
        borderRadius: 5,
        width: 393,
    },

    submitButtonStyle: {
      padding: 5,
      margin: 5,
      float: "right",
      backgroundColor: "#EBA286",
      borderRadius: 5,
      width: 100,
  },
};

export const AdoptionForm: React.FC<AdoptionFormProps> = (props: any) => {
  const { register, handleSubmit } = useForm<AdoptionFormProps>();
  const onSubmit: SubmitHandler<AdoptionFormProps> = data => console.log(data);

  return (
    <form style={styles.formStyle} onSubmit={handleSubmit(onSubmit)}>
      <label style={styles.labelStyle}>Adoption Form</label><br/>
      <input style={styles.inputStyle} type="text" {...register("firstName")} required placeholder="First Name" />
      <input style={styles.inputStyle} type="text" {...register("lastName")} required placeholder="Last Name" /><br/>
      <input style={styles.longInputStyle} type="email" {...register("email")} required placeholder="your@email.com" /><br/>
      <input style={styles.inputStyle} type="tel" {...register("phoneNumber")} required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" /><br/>
      <input style={styles.longInputStyle} type="text" {...register("address")} required placeholder="123 Your Address Lane" /><br/>
      <input style={styles.longInputStyle} type="text" {...register("city")} required placeholder="City" /><br/>
      <input style={styles.inputStyle} type="text" {...register("state")} required placeholder="State" />
      <input style={styles.inputStyle} type="text" {...register("zipCode")} required placeholder="Zip Code" /><br/>
      <input style={styles.submitButtonStyle} type="submit" />
    </form>
  );
}
