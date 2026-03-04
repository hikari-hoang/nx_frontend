import { Card, Row, Col, Input, Form, DatePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

export default function TransportationInfoSection() {
  const { control } = useFormContext();

  return (
    <Card title="Thông tin vận chuyển" className="mb-6">
      <Form layout="vertical">

        <Row gutter={[24, 20]}>
          <Col span={6}>
            <Form.Item label="Ngày khởi hành vận chuyển">
              <Controller
                name="transport.departureDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    style={{ width: "100%" }}
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(d) =>
                      field.onChange(d ? d.toISOString() : null)
                    }
                  />
                )}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[24, 20]}>
          <Col span={8}>
            <Form.Item label="Mã địa điểm">
              <Controller
                name="transport.locationCode"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập mã địa điểm" />
                )}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Ngày đến">
              <Controller
                name="transport.arrivalDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    style={{ width: "100%" }}
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(d) =>
                      field.onChange(d ? d.toISOString() : null)
                    }
                  />
                )}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Ngày khởi hành">
              <Controller
                name="transport.departureFromLocationDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    style={{ width: "100%" }}
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(d) =>
                      field.onChange(d ? d.toISOString() : null)
                    }
                  />
                )}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[24, 20]}>
          <Col span={12}>
            <Form.Item label="Địa điểm đích cho vận chuyển bảo thuế">
              <Controller
                name="transport.bondedDestination"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập địa điểm đích" />
                )}
              />
            </Form.Item>
          </Col>
        </Row>

      </Form>
    </Card>
  );
}