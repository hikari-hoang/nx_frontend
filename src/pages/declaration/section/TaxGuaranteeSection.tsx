import { Card, Row, Col, Input, Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const taxGuaranteeFields = [
  [
    { label: "Phí bảo hiểm", name: "KhaiToKhai.Phi_BH" },
    { label: "Phí vận chuyển", name: "KhaiToKhai.Phi_VC" },
    { label: "PL phí vận chuyển", name: "KhaiToKhai.Ma_phan_loai_phi_van_chuyen" },
  ],
  [
    { label: "PL phí bảo hiểm", name: "KhaiToKhai.Ma_phan_loai_phi_bao_hiem" },
    { label: "Tiền phí vận chuyển", name: "KhaiToKhai.Ma_tien_phi_van_chuyen" },
    { label: "Tiền phí bảo hiểm", name: "KhaiToKhai.Ma_tien_phi_bao_hiem" },
  ],
  [
    { label: "Trị giá KB", name: "KhaiToKhai.Tri_gia_KB" },
    { label: "Tổng trị giá TT", name: "KhaiToKhai.Tong_tri_gia_TT" },
    { label: "Tổng tiền thuế", name: "KhaiToKhai.Tong_tien_thue" },
  ],
  [
    { label: "Mã đồng tiền trị giá tính thuế", name: "KhaiToKhai.Ma_dong_tien_tri_gia_tinh_thue" },
    { label: "Mã ngân hàng trả thuế", name: "KhaiToKhai.Ma_ngan_hang_tra_thue" },
    { label: "Mã xác định thời hạn nộp thuế", name: "KhaiToKhai.Ma_xac_dinh_thoi_han_nop_thue" },
  ],
  [
    { label: "Năm phát hành hạn mức", name: "KhaiToKhai.Nam_phat_hanh_han_muc" },
    { label: "Ký hiệu CT hạn mức", name: "KhaiToKhai.Ky_hieu_CT_han_muc" },
    { label: "Số CT hạn mức", name: "KhaiToKhai.So_CT_han_muc" },
  ],
  [
    { label: "Mã ngân hàng bảo lãnh", name: "KhaiToKhai.Ma_ngan_hang_bao_lanh" },
    { label: "Năm phát hành bảo lãnh", name: "KhaiToKhai.Nam_phat_hanh_bao_lanh" },
    { label: "Ký hiệu CT bảo lãnh", name: "KhaiToKhai.Ky_hieu_CT_bao_lanh" },
  ],
  [
    { label: "Số hiệu CT bảo lãnh", name: "KhaiToKhai.So_hieu_CT_bao_lanh" },
    { label: "Số giấy phép", name: "KhaiToKhai.So_giay_phep" },
  ],
];

export default function TaxGuaranteeSection() {
  const { control } = useFormContext();

  return (
    <Card title="Thuế, bảo lãnh & thanh toán" className="mb-6">
      <Form layout="vertical">
        {taxGuaranteeFields.map((row, rowIndex) => (
          <Row key={rowIndex} gutter={[24, 20]}>
            {row.map((item) => (
              <Col key={item.name} span={8}>
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