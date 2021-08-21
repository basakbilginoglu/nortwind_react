import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
export default function () {
  const initialValues = { productName: "", unitPrice: "" };
  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün Fiyatı zorunlu"),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <KodlamaIoTextInput name="productName" placeholder="Urun adi" />

          <KodlamaIoTextInput name="unitPrice" placeholder="Urun fiyatı" />

          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
