import { Card, Row, Col, Input, Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const enterpriseCustomsFields = [
  [
    {
      span: 12,
      label: "Tên đối tác",
      name: "KhaiToKhai.Ten_doi_tac",
    },
    {
      span: 12,
      label: "Tên đơn vị xuất/nhập khẩu",
      name: "KhaiToKhai.Ten_don_vi_xuat_nhap_khau",
    },
  ],
  [
    {
      span: 24,
      label: "Địa chỉ doanh nghiệp xuất/nhập khẩu",
      name: "KhaiToKhai.Dia_chi_doanh_nghiep_xuat_nhap_khau",
    },
  ],
  [
    {
      span: 12,
      label: "Địa chỉ người xuất/nhập khẩu 1",
      name: "KhaiToKhai.Dia_chi_nguoi_xuat_nhap_khau1",
    },
    {
      span: 12,
      label: "Địa chỉ người xuất/nhập khẩu 2",
      name: "KhaiToKhai.Dia_chi_nguoi_xuat_nhap_khau2",
    },
  ],
  [
    {
      span: 12,
      label: "Địa chỉ người xuất/nhập khẩu 3",
      name: "KhaiToKhai.Dia_chi_nguoi_xuat_nhap_khau3",
    },
    {
      span: 12,
      label: "Địa chỉ người xuất/nhập khẩu 4",
      name: "KhaiToKhai.Dia_chi_nguoi_xuat_nhap_khau4",
    },
  ],
  [
    {
      span: 12,
      label: "Mã HQ",
      name: "KhaiToKhai.Ma_HQ",
    },
    {
      span: 12,
      label: "Mã loại hình (LH)",
      name: "KhaiToKhai.Ma_LH",
    },
  ],
  [
    {
      span: 12,
      label: "Mã đại lý HQ",
      name: "KhaiToKhai.Ma_dai_ly_HQ",
    },
    {
      span: 12,
      label: "Mã bộ phận xử lý tờ khai",
      name: "KhaiToKhai.Ma_bo_phan_xu_ly_tk",
    },
  ],
  [
    {
      span: 12,
      label: "Phân loại cá nhân/tổ chức",
      name: "KhaiToKhai.Phan_loai_cac_nhan_to_chuc",
    },
    {
      span: 12,
      label: "Người nộp thuế",
      name: "KhaiToKhai.Nguoi_nop_thue",
    },
  ],
  [
    {
      span: 12,
      label: "Mã nước xuất khẩu",
      name: "KhaiToKhai.Ma_nuoc_xuat_khau",
    },
    {
      span: 12,
      label: "Mã lý do đề nghị BP",
      name: "KhaiToKhai.Ma_ly_do_de_nghi_BP",
    },
  ],
];

export default function EnterpriseCustomsSection() {
  const { control } = useFormContext();

  return (
    <Card title="Thông tin doanh nghiệp & Hải quan" className="mb-6">
      <Form layout="vertical">
        {enterpriseCustomsFields.map((row, rowIndex) => (
          <Row key={rowIndex} gutter={[24, 20]}>
            {row.map((item) => (
              <Col key={item.name} span={item.span}>
                <Form.Item label={item.label}>
                  <Controller
                    name={item.name}
                    control={control}
                    render={({ field }) => <Input {...field} />}
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