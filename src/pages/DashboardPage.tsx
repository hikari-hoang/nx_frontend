// import React, { useEffect } from "react";
// import {
//   Card,
//   Row,
//   Col,
//   Input,
//   DatePicker,
//   InputNumber,
//   Button,
//   Table,
//   Typography,
//   Divider,
// } from "antd";
// import { useForm, Controller, useFieldArray } from "react-hook-form";
// import dayjs from "dayjs";
// import { mockData } from "../helper/helper";

// const { Title } = Typography;

// const mapping: {
//   KhaiToKhai: Record<string, string | null>;
//   KhaiHang: Record<string, string | null>;
// } = {
//   KhaiToKhai: {
//     "Số tờ khai": "documentInfo.declarationNumber",
//     "Ngày đăng ký": "documentInfo.issueDate",
//     "Mã HQ": "customsInfo.customsOfficeCode",
//     "Mã LH": "documentInfo.documentType",
//     "Tên đối tác": "parties.consignee.name",
//     "Mã đại lý HQ": null,
//     "Phân loại các nhân tổ chức": null,
//     "Mã bộ phận xử lý tk": null,
//     "Mã hiệu phương thức vận chuyển": "shipmentDetails.transportMethodCode",
//     "Vận đơn": "shipmentDetails.shipmentId",
//     "Số lượng kiện": "shipmentDetails.totalPackages",
//     "Tổng trọng lượng hàng (Gross)": "shipmentDetails.weight.gross",
//     "Mã địa điểm lưu kho": null,
//     "Tên địa điểm lưu kho": null,
//     "Mã phương tiện vận chuyển": null,
//     "Tên phương tiện vận chuyển": "shipmentDetails.vessel",
//     "Ngày đến": "shipmentDetails.estimatedArrival",
//     "Mã địa điểm xếp hàng": "shipmentDetails.portOfLoading",
//     "Tên địa điểm xếp hàng": "shipmentDetails.portOfLoading",
//     "Mã địa điểm dỡ hàng": "shipmentDetails.portOfDischarge",
//     "Tên địa điểm dỡ hàng": "shipmentDetails.portOfDischarge",
//     "Số lượng cont": "shipmentDetails.containerNumbers",
//     "Số giấy phép": "compliance.permits",
//     "Số HĐTM": "commercialInfo.invoiceNumber",
//     "Ngày HĐTM": "commercialInfo.invoiceDate",
//     "Tổng trị giá HĐ": "commercialInfo.totalValue",
//     "Phương thức thanh toán": "commercialInfo.paymentTerms",
//     "Điều kiện giá hóa đơn": null,
//     "Ng.Tệ hóa đơn": "commercialInfo.currency",
//     "Tỷ giá VNĐ": "commercialInfo.exchangeRate",
//     "Phí BH": "commercialInfo.insurance",
//     "Phí VC": "commercialInfo.freightCharges",
//     "Người nộp thuế": null,
//     "Trị giá KB": null,
//     "Tổng trị giá TT": null,
//     "Tổng tiền thuế": null,
//     "Mã lý do đề nghị BP": null,
//     "Mã ngân hàng trả thuế": null,
//     "Năm phát hành hạn mức": null,
//     "Ký hiệu CT hạn mức": null,
//     "Số CT hạn mức": null,
//     "Mã xác định thời hạn nộp thuế": null,
//     "Mã ngân hàng bảo lãnh": null,
//     "Năm phát hành bảo lãnh": null,
//     "Ký hiệu CT bảo lãnh": null,
//     "Số hiệu CT bảo lãnh": null,
//     "Số HĐ": "commercialInfo.invoiceNumber",
//     "Ngày HĐ": "commercialInfo.invoiceDate",
//     "Ngày HHHĐ": null,
//     "Trạng thái": null,
//     "Phân luồng": "customsInfo.inspectionClassificationCode",
//     "Loại tờ khai nhập xuất": "documentInfo.documentType",
//     "Tên đơn vị xuất/nhập khẩu": "parties.consignee.name",
//     "Loại hình tờ khai": "documentInfo.documentType",
//     "Địa chỉ doanh nghiệp xuất/nhập khẩu": "parties.consignee.address",
//     "Mã nước xuất khẩu": "parties.shipper.country",
//     "Loại kiện": null,
//     "Đơn vị tính trọng lượng": "shipmentDetails.weight.unit",
//     "Hóa đơn thương mại": "commercialInfo.invoiceNumber",
//     "Mã phân loại hóa đơn": null,
//     "Mã phân loại phí vận chuyển": null,
//     "Mã phân loại phí bảo hiểm": null,
//     "Mã tiền phí vận chuyển": null,
//     "Mã tiền phí bảo hiểm": null,
//     "Địa chỉ người xuất/nhập khẩu1": "parties.consignee.address",
//     "Ghi chú": "customsInfo.customsNotes",
//     "Mã phân loại hình thức hóa đơn": null,
//     "Địa điểm đích cho vận chuyển báo thuế": null,
//     "Ngày dự kiến đến địa điểm đích": null,
//     "Ngày khởi hành vận chuyển": "shipmentDetails.departureDate",
//     "Mã phân loại tờ khai trị giá": null,
//     "Địa chỉ người xuất/nhập khẩu2": "parties.consignee.address",
//     "Địa chỉ người xuất/nhập khẩu3": "parties.consignee.address",
//     "Địa chỉ người xuất/nhập khẩu4": "parties.consignee.address",
//     "Mã đồng tiền trị giá tính thuế": "commercialInfo.currency",
//   },
//   KhaiHang: {
//     "Tên hàng": "goods[].description",
//     "Mã hàng": "goods[].model",
//     "Mã HS": "goods[].hsCode",
//     "Nước XX": "goods[].countryOfOrigin",
//     "Đơn vị tính": "goods[].unit",
//     Lượng: "goods[].quantity",
//     "Đơn giá HĐ": "goods[].unitPrice",
//     "Trị giá HĐ": "goods[].totalValue",
//     "Trị giá tính thuế": null,
//     STTHang: null,
//     "Mã miễn giảm không chịu thuế XNK": null,
//     "Số tiền giảm thuế XNK": null,
//     "Tiền thuế suất": null,
//     "Tiền thuế TV": null,
//     "Tiền thuế PB": null,
//     "Tiền Thuế TTĐB": null,
//     "Tiền thuế MT": null,
//     "Tiền thuế VAT": null,
//     "Đơn giá hợp đồng TM": "goods[].unitPrice",
//     "Trị giá hợp đồng TM": "goods[].totalValue",
//     "Mã biểu thuế nhập khẩu": null,
//     "Mã biểu thuế VAT": null,
//     "Loại hàng": null,
//     "Mã miễn giảm": null,
//     "Đơn vị tính 2": null,
//     "Lượng 2": null,
//   },
// };
// type FormValues = typeof mockData.docsInfo;

// export default function DashboardPage() {
//   const { control, register, handleSubmit, watch, setValue } =
//     useForm<FormValues>({
//       defaultValues: mockData.docsInfo,
//     });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "goods",
//   });

//   const goodsWatch = watch("goods");

//   /* =========================
//      AUTO CALC TOTAL VALUE
//   ========================= */
//   useEffect(() => {
//     goodsWatch?.forEach((item, index) => {
//       const total =
//         (item?.quantity || 0) * (item?.unitPrice || 0);
//       setValue(`goods.${index}.totalValue`, total);
//     });
//   }, [goodsWatch, setValue]);

//   /* =========================
//      DYNAMIC FIELD RENDER
//   ========================= */

//   const renderDynamicField = (label: string, path: string) => {
//     const lower = path.toLowerCase();

//     const isDate =
//       lower.includes("date") ||
//       lower.includes("arrival");

//     const isNumber =
//       lower.includes("value") ||
//       lower.includes("quantity") ||
//       lower.includes("gross") ||
//       lower.includes("rate") ||
//       lower.includes("price");

//     return (
//       <Col span={8} key={label} style={{ marginBottom: 16 }}>
//         <label style={{ fontWeight: 400 }}>{label}</label>

//         {isDate ? (
//           <Controller
//             control={control}
//             name={path as any}
//             render={({ field }) => (
//               <DatePicker
//                 style={{ width: "100%" }}
//                 value={
//                   field.value ? dayjs(field.value) : null
//                 }
//                 onChange={(date) =>
//                   field.onChange(
//                     date ? date.toISOString() : null,
//                   )
//                 }
//               />
//             )}
//           />
//         ) : isNumber ? (
//           <Controller
//             control={control}
//             name={path as any}
//             render={({ field }) => (
//               <InputNumber
//                 style={{ width: "100%" }}
//                 {...field}
//               />
//             )}
//           />
//         ) : (
//           <Input {...register(path as any)} />
//         )}
//       </Col>
//     );
//   };

//   /* =========================
//      SUBMIT
//   ========================= */

//   const onSubmit = (data: FormValues) => {
//     console.log("FORM DATA:", data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Title level={4}>TỜ KHAI HẢI QUAN</Title>

//       {/* =========================
//          I. KHAI TỜ KHAI
//       ========================= */}

//       <Card title="I. Khai tờ khai" style={{ marginBottom: 24 }}>
//         <Row gutter={16}>
//           {Object.entries(mapping.KhaiToKhai)
//             .filter(([_, path]) => path)
//             .map(([label, path]) =>
//               renderDynamicField(label, path!),
//             )}
//         </Row>
//       </Card>

//       {/* =========================
//          II. KHAI HÀNG
//       ========================= */}

//       <Card
//         title="II. Khai hàng"
//         extra={
//           <Button
//             type="primary"
//             onClick={() =>
//               append({
//                 description: "",
//                 model: "",
//                 hsCode: "",
//                 countryOfOrigin: "",
//                 unit: "",
//                 quantity: 0,
//                 unitPrice: 0,
//                 totalValue: 0,
//               })
//             }
//           >
//             + Thêm hàng
//           </Button>
//         }
//       >
//         <Table
//           dataSource={fields}
//           rowKey="id"
//           pagination={false}
//           columns={[
//             ...Object.entries(mapping.KhaiHang)
//               .filter(([_, path]) => path)
//               .map(([title, path]) => {
//                 const fieldName = path!.replace(
//                   "goods[].",
//                   "",
//                 );

//                 const isNumber =
//                   fieldName.toLowerCase().includes("quantity") ||
//                   fieldName.toLowerCase().includes("price") ||
//                   fieldName.toLowerCase().includes("value");

//                 return {
//                   title,
//                   render: (_: any, __: any, index: number) =>
//                     isNumber ? (
//                       <Controller
//                         control={control}
//                         name={`goods.${index}.${fieldName}` as any}
//                         render={({ field }) => (
//                           <InputNumber
//                             style={{ width: "100%" }}
//                             {...field}
//                             disabled={
//                               fieldName === "totalValue"
//                             }
//                           />
//                         )}
//                       />
//                     ) : (
//                       <Input
//                         {...register(
//                           `goods.${index}.${fieldName}` as any,
//                         )}
//                       />
//                     ),
//                 };
//               }),
//             {
//               title: "",
//               render: (_: any, __: any, index: number) => (
//                 <Button
//                   danger
//                   onClick={() => remove(index)}
//                 >
//                   Xóa
//                 </Button>
//               ),
//             },
//           ]}
//         />
//       </Card>

//       <Button
//         type="primary"
//         htmlType="submit"
//         size="large"
//         style={{ marginTop: 24 }}
//       >
//         Lưu tờ khai
//       </Button>
//     </form>
//   );
// }

const DashboardPage = () => {
  return <>DashBoard</>
}

export default DashboardPage