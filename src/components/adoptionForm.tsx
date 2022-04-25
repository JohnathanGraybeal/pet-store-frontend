import React from "react";
import { useColorModeValue, Input } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

interface AdoptionFormProps {
  animalID: number;
  animalName: String;
  firstName?: String;
  lastName?: String;
  email?: String; 
  phoneNumber?: String;
  address?: String;
  city?: String;
  state?: String;
  zipCode?: String;
}

export const AdoptionForm: React.FC<AdoptionFormProps> = (adopt) => {
  const { register, handleSubmit } = useForm<AdoptionFormProps>();
  const onSubmit: SubmitHandler<AdoptionFormProps> = data => console.log(data);

  var styles = {
    labelStyle: {
      padding: 5,
      margin: 5,
      fontSize: 20,
      color: useColorModeValue("gray", "pink"),
  },
    
    inputStyle: {
        width: "97%",
        margin: 5,
        borderRadius: 5,
        color: "#323232",
    },
};
//console.log(adopt);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label style={styles.labelStyle}>Adoption Form</label><br/>
      <Input style={styles.inputStyle} type="hidden" {...register("animalID")} value={adopt.animalID} />
      <Input style={styles.inputStyle} type="hidden" {...register("animalName")} value={adopt.animalName.toString()} />
      <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="text" {...register("firstName")} required placeholder="First Name" />
      <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="text" {...register("lastName")} required placeholder="Last Name" /><br/>
      <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="email" {...register("email")} required placeholder="your@email.com" /><br/>
      <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="tel" {...register("phoneNumber")} required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" /><br/>
      <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="text" {...register("address")} required placeholder="123 Your Address Lane" /><br/>
      <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="text" {...register("city")} required placeholder="City" /><br/>
      <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="text" {...register("state")} required placeholder="State" />
      <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="text" {...register("zipCode")} required placeholder="Zip Code" /><br/>
      <Input borderColor='blue.500' type="submit" placeholder="Submit" />
    </form>
  );
}
