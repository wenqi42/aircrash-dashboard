import { useFilterDataContext } from "@/context";
import React, { useMemo } from "react";
import { Drawer, Descriptions, Typography, Divider, Tag, Space } from "antd";

const { Title, Text, Paragraph } = Typography;

function formatTimeFromFraction(dayFraction?: number) {
  if (typeof dayFraction !== "number" || Number.isNaN(dayFraction)) return "-";
  const totalMinutes = Math.round(dayFraction * 24 * 60);
  const hours = Math.floor(totalMinutes / 60)
    .toString()
    .padStart(2, "0");
  const minutes = (totalMinutes % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

function formatNumber(n?: number) {
  if (typeof n !== "number" || Number.isNaN(n)) return "-";
  return new Intl.NumberFormat().format(n);
}

const DetailsDrawer: React.FC = () => {
  const { setSelectData, selectData } = useFilterDataContext();

  const properties = selectData?.properties as
    | {
        Date?: string;
        Time?: number;
        Location?: string;
        Operator?: string;
        Route?: string;
        Type?: string;
        Registration?: string;
        "cn/In"?: string;
        Aboard?: number;
        Fatalities?: number;
        Ground?: number;
        Summary?: string;
        index?: number;
        country?: string;
      }
    | undefined;

  const [lng, lat] = useMemo(() => {
    const coords = (selectData?.geometry as any)?.coordinates as
      | [number, number]
      | undefined;
    if (!coords) return [undefined, undefined] as const;
    return [coords[0], coords[1]] as const;
  }, [selectData]);

  const open = !!selectData;

  const deathRate = useMemo(() => {
    if (!properties) return "-";
    const aboard = Number(properties.Aboard ?? 0);
    const fatalities = Number(properties.Fatalities ?? 0);
    if (!aboard || aboard <= 0) return "-";
    const rate = fatalities / aboard;
    return `${(rate * 100).toFixed(2)}%`;
  }, [properties]);

  return (
    <Drawer
      title={<Title level={5} style={{ margin: 0 }}>{window.t('drawer.title')}</Title>}
      width={520}
      open={open}
      destroyOnClose
      onClose={() => (setSelectData as unknown as (v: undefined) => void)(undefined)}
    >
      {properties ? (
        <Space direction="vertical" size={16} style={{ width: "100%" }}>
          <Descriptions
            title={
              <Space wrap>
                <Text strong>{properties?.Location || window.t('common.unknown')}</Text>
                {properties?.country ? <Tag color="blue">{properties.country}</Tag> : null}
                {typeof properties?.index === "number" ? (
                  <Tag>{window.t('drawer.field.index')} {properties.index}</Tag>
                ) : null}
              </Space>
            }
            bordered
            column={1}
            size="middle"
          >
            <Descriptions.Item label={window.t('drawer.field.date')}>
              {properties?.Date || window.t('common.unknown')}
            </Descriptions.Item>
            <Descriptions.Item label={window.t('drawer.field.time')}>
              {formatTimeFromFraction(properties?.Time)}
            </Descriptions.Item>
            <Descriptions.Item label={window.t('drawer.field.operator')}>
              {properties?.Operator || window.t('common.unknown')}
            </Descriptions.Item>
            <Descriptions.Item label={window.t('drawer.field.route')}>
              {properties?.Route || window.t('common.unknown')}
            </Descriptions.Item>
            <Descriptions.Item label={window.t('drawer.field.type')}>
              {properties?.Type || window.t('common.unknown')}
            </Descriptions.Item>
            <Descriptions.Item label={window.t('drawer.field.registration')}>
              {properties?.Registration || window.t('common.unknown')}
            </Descriptions.Item>
            <Descriptions.Item label={window.t('drawer.field.cnin')}>
              {properties?.["cn/In"] || window.t('common.unknown')}
            </Descriptions.Item>
          </Descriptions>

          <Descriptions title={window.t('drawer.section.people')} bordered column={2} size="middle">
            <Descriptions.Item label={window.t('drawer.field.aboard')}>
              {formatNumber(properties?.Aboard)}
            </Descriptions.Item>
            <Descriptions.Item label={window.t('drawer.field.fatalities')}>
              {formatNumber(properties?.Fatalities)}
            </Descriptions.Item>
            <Descriptions.Item label={window.t('drawer.field.ground')}>
              {formatNumber(properties?.Ground)}
            </Descriptions.Item>
            <Descriptions.Item label={window.t('drawer.field.deathRate')}>
              {deathRate}
            </Descriptions.Item>
          </Descriptions>

          <Descriptions title={window.t('drawer.section.geo')} bordered column={2} size="middle">
            <Descriptions.Item label={window.t('drawer.field.longitude')}>
              {typeof lng === "number" ? lng.toFixed(6) : window.t('common.unknown')}
            </Descriptions.Item>
            <Descriptions.Item label={window.t('drawer.field.latitude')}>
              {typeof lat === "number" ? lat.toFixed(6) : window.t('common.unknown')}
            </Descriptions.Item>
          </Descriptions>

          <Divider style={{ margin: "8px 0" }} />
          <div>
            <Text strong>{window.t('drawer.section.summary')}</Text>
            <Paragraph style={{ marginTop: 8 }}>
              {properties?.Summary || window.t('common.unknown')}
            </Paragraph>
          </div>
        </Space>
      ) : (
        <Text type="secondary">{window.t('drawer.selectTip')}</Text>
      )}
    </Drawer>
  );
};

export default DetailsDrawer;