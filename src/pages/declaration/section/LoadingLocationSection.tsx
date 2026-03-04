import { Card, Row, Col, Input, Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export default function LoadingLocationSection() {
  const { control } = useFormContext();

  return (
    <Card
      title="Địa điểm xếp hàng lên xe chở hàng"
      className="mb-6"
    >
      <Form layout="vertical">

        {/* ===== Thông tin địa điểm ===== */}
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Form.Item label="Mã địa điểm">
              <Controller
                name="loadingLocation.locationCode"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập mã địa điểm" />
                )}
              />
            </Form.Item>
          </Col>

          <Col span={18}>
            <Form.Item label="Tên địa điểm">
              <Controller
                name="loadingLocation.locationName"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập tên địa điểm" />
                )}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item label="Địa chỉ">
              <Controller
                name="loadingLocation.address"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập địa chỉ" />
                )}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="Địa điểm dự kiến xếp hàng lên PTVC">
              <Controller
                name="loadingLocation.expectedGoodsLocation"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập địa điểm dự kiến" />
                )}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* ===== Số container ===== */}
        <Card
          size="small"
          title="Số Container"
          style={{ marginTop: 16 }}
        >
          <Row gutter={[12, 12]}>
            {Array.from({ length: 10 }).map((_, index) => (
              <Col span={4} key={index}>
                <Form.Item label={`${index + 1}`}>
                  <Controller
                    name={`loadingLocation.containers.${index}`}
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Nhập số container"
                      />
                    )}
                  />
                </Form.Item>
              </Col>
            ))}
          </Row>
        </Card>

      </Form>
    </Card>
  );
}