import { Card, Row, Col, Input, DatePicker, Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

const contractInvoiceFields = [
  [
    {
      span: 8,
      label: "Số HĐTM",
      name: "KhaiToKhai.So_HDTM",
      type: "input",
    },
    {
      span: 8,
      label: "Ngày HĐTM",
      name: "KhaiToKhai.Ngay_HDTM",
      type: "date",
    },
    {
      span: 8,
      label: "Tổng trị giá HĐ",
      name: "KhaiToKhai.Tong_tri_gia_HD",
      type: "input",
    },
  ],
  [
    {
      span: 8,
      label: "Số HĐ",
      name: "KhaiToKhai.So_HD",
      type: "input",
    },
    {
      span: 8,
      label: "Ngày HĐ",
      name: "KhaiToKhai.Ngay_HD",
      type: "date",
    },
    {
      span: 8,
      label: "Ngày HHHĐ",
      name: "KhaiToKhai.Ngay_HHHD",
      type: "date",
    },
  ],
  [
    {
      span: 8,
      label: "Hóa đơn thương mại",
      name: "KhaiToKhai.Hoa_don_thuong_mai",
      type: "input",
    },
    {
      span: 8,
      label: "Mã phân loại hóa đơn",
      name: "KhaiToKhai.Ma_phan_loai_hoa_don",
      type: "input",
    },
    {
      span: 8,
      label: "Mã phân loại hình thức hóa đơn",
      name: "KhaiToKhai.Ma_phan_loai_hinh_thuc_hoa_don",
      type: "input",
    },
  ],
  [
    {
      span: 8,
      label: "Phương thức thanh toán",
      name: "KhaiToKhai.Phuong_thuc_thanh_toan",
      type: "input",
    },
    {
      span: 8,
      label: "Điều kiện giá hóa đơn",
      name: "KhaiToKhai.Dieu_kien_gia_hoa_don",
      type: "input",
    },
    {
      span: 8,
      label: "Ng.tệ hóa đơn",
      name: "KhaiToKhai.Ng_Te_hoa_don",
      type: "input",
    },
  ],
  [
    {
      span: 8,
      label: "Tỷ giá VNĐ",
      name: "KhaiToKhai.Ty_gia_VND",
      type: "input",
    },
  ],
];

export default function ContractInvoiceSection() {
  const { control } = useFormContext();

  const renderField = (item: any, field: any) => {
    if (item.type === "date") {
      return (
        <DatePicker
          style={{ width: "100%" }}
          format="DD/MM/YYYY"
          value={field.value ? dayjs(field.value) : null}
          onChange={(date) =>
            field.onChange(date ? date.toISOString() : null)
          }
        />
      );
    }

    return <Input {...field} />;
  };

  return (
    <Card title="Hợp đồng & Hóa đơn thương mại" className="mb-6">
      <Form layout="vertical">
        {contractInvoiceFields.map((row, rowIndex) => (
          <Row key={rowIndex} gutter={[24, 20]}>
            {row.map((item) => (
              <Col key={item.name} span={item.span}>
                <Form.Item label={item.label}>
                  <Controller
                    name={item.name}
                    control={control}
                    render={({ field }) => renderField(item, field)}
                  />
                </Form.Item>
              </Col>
            ))}
          </Row>
        ))}
      </Form>
    </Card>
  );
}