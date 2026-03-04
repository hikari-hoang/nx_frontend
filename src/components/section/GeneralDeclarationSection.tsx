import { Card, Row, Col, Input, DatePicker, Radio, Form, Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

const generalDeclarationFields = [
  {
    row: [
      {
        span: 14,
        label: "Loại tờ khai nhập xuất",
        name: "KhaiToKhai.Loai_to_khai_nhap_xuat",
        type: "radio",
        options: [
          { label: "Nhập khẩu", value: "IMPORT" },
          { label: "Xuất khẩu", value: "EXPORT" },
        ],
      },
      // {
      //   span: 5,
      //   label: "Số tờ khai",
      //   name: "KhaiToKhai.So_to_khai",
      //   type: "input",
      // },
      // {
      //   span: 5,
      //   label: "STT",
      //   name: "KhaiToKhai.STT",
      //   type: "input",
      // },
    ],
  },
  {
    row: [
      {
        span: 8,
        label: "Ngày đăng ký",
        name: "KhaiToKhai.Ngay_dang_ky",
        type: "date",
      },
      {
        span: 8,
        label: "Trạng thái",
        name: "KhaiToKhai.Trang_thai",
        type: "select",
        options: [
          { label: "Mới tạo", value: "NEW" },
          { label: "Đã gửi", value: "SUBMITTED" },
          { label: "Đã thông quan", value: "CLEARED" },
        ],
      },
      {
        span: 8,
        label: "Phân luồng",
        name: "KhaiToKhai.Phan_luong",
        type: "select",
        options: [
          { label: "Xanh", value: "GREEN" },
          { label: "Vàng", value: "YELLOW" },
          { label: "Đỏ", value: "RED" },
        ],
      },
    ],
  },
  {
    row: [
      {
        span: 12,
        label: "Loại hình tờ khai",
        name: "KhaiToKhai.Loai_hinh_to_khai",
        type: "input",
      },
      {
        span: 12,
        label: "Mã phân loại tờ khai trị giá",
        name: "KhaiToKhai.Ma_phan_loai_to_khai_tri_gia",
        type: "input",
      },
    ],
  },
  {
    row: [
      {
        span: 24,
        label: "Ghi chú",
        name: "KhaiToKhai.Ghi_chu",
        type: "input",
      },
    ],
  },
];

export default function GeneralDeclarationSection() {
  const { control } = useFormContext();

  const renderField = (config: any, field: any) => {
    switch (config.type) {
      case "input":
        return <Input {...field} />;

      case "radio":
        return (
          <Radio.Group {...field}>
            {config.options?.map((opt: any) => (
              <Radio key={opt.value} value={opt.value}>
                {opt.label}
              </Radio>
            ))}
          </Radio.Group>
        );

      case "select":
        return <Select {...field} options={config.options} allowClear />;

      case "date":
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

      default:
        return <Input {...field} />;
    }
  };

  return (
    <Card title="Thông tin chung" className="mb-6">
      <Form layout="vertical">
        {generalDeclarationFields.map((group, index) => (
          <Row key={index} gutter={[24, 20]}>
            {group.row.map((item: any) => (
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
