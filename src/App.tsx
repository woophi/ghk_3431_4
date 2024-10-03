import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Collapse } from '@alfalab/core-components/collapse';
import { Divider } from '@alfalab/core-components/divider';
import { Gap } from '@alfalab/core-components/gap';
import { Input } from '@alfalab/core-components/input';
import { Switch } from '@alfalab/core-components/switch';
import { Typography } from '@alfalab/core-components/typography';
import { useCallback, useState } from 'react';
import { LS, LSKeys } from './ls';
import { MoreInfoLayout } from './more-info/MoreInfoLayout';
import { miSt } from './more-info/style.css';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';
import { sendDataToGA } from './utils/events';

export const App = () => {
  const [checked, setChecked] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(true);
  const [loading, setLoading] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [limit, setLimit] = useState<number | undefined>(undefined);

  const submit = useCallback(() => {
    window.gtag('event', '3431_create_template_v4');
    setLoading(true);

    sendDataToGA({
      autopayments: Number(checked) as 1 | 0,
      limit: Number(checked2) as 1 | 0,
      limit_sum: limit ?? 0,
      insurance: Number(checked3) as 1 | 0,
    }).then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  }, [checked, checked2, checked3, limit]);

  if (thxShow) {
    return <ThxLayout />;
  }

  if (moreInfo) {
    return (
      <MoreInfoLayout
        goBack={() => {
          window.gtag('event', '3431_back_to_settings_v4');
          setMoreInfo(false);
        }}
      />
    );
  }

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
          Оплата ЖКУ
        </Typography.TitleResponsive>

        <Switch
          block
          reversed
          checked={checked}
          label="Оплачивать счета автоматически"
          hint="Уведомим вас перед списанием, автооплату всегда можно отменить"
          onChange={() => setChecked(prevState => !prevState)}
          className={appSt.switchItem}
        />
        <Switch
          block
          reversed
          checked={checked2}
          label="Установить лимит на сумму платежа"
          onChange={() => setChecked2(prevState => !prevState)}
          className={appSt.switchItem}
        />
        <Collapse expanded={checked2}>
          <Input
            block
            label="Лимит на сумму платежа"
            labelView="outer"
            placeholder="5 000"
            size={48}
            value={String(limit)}
            type="number"
            onChange={(_, { value }) => setLimit(Number(value) > 1_000_000 ? 1_000_000 : Number(value))}
            rightAddons="₽"
            pattern="[0-9]*"
            inputMode="numeric"
            min={1}
            max={1_000_000}
          />
        </Collapse>
        <div className={appSt.box}>
          <div className={appSt.boxInner}>
            <Switch
              block
              reversed
              checked={checked3}
              label="Страхование имущества"
              onChange={() => setChecked3(prevState => !prevState)}
              className={appSt.switchItem}
            />
            <Typography.Text view="primary-small" weight="medium" color="secondary">
              Защитим домашнее имущество, внутреннюю отделку, включая трубы и электрику. Возместим ущерб соседям.
            </Typography.Text>
            <div className={miSt.row}>
              <Typography.Text view="primary-medium" color="secondary" weight="medium">
                Внутренняя отделка
              </Typography.Text>
              <Typography.Text view="primary-medium" weight="medium" style={{ flexShrink: 0 }}>
                до 100 000 ₽
              </Typography.Text>
            </div>
            <Divider className={appSt.hr} />
            <div className={miSt.row}>
              <Typography.Text view="primary-medium" color="secondary" weight="medium">
                Ответственность перед соседями
              </Typography.Text>
              <Typography.Text view="primary-medium" weight="medium" style={{ flexShrink: 0 }}>
                до 100 000 ₽
              </Typography.Text>
            </div>
            <Divider className={appSt.hr} />

            <div className={miSt.row}>
              <Typography.Text view="primary-medium" color="secondary" weight="medium">
                Движимое имущество
              </Typography.Text>
              <Typography.Text view="primary-medium" weight="medium" style={{ flexShrink: 0 }}>
                до 100 000 ₽
              </Typography.Text>
            </div>
          </div>
          <div
            className={appSt.row}
            onClick={() => {
              window.gtag('event', '3431_more_info_v4');
              setMoreInfo(true);
            }}
            style={{ height: '56px', backgroundColor: '#F3F4F5', padding: '1rem' }}
          >
            <Typography.Text view="primary-medium" weight="medium">
              Узнать подробнее
            </Typography.Text>
            <CDNIcon name="glyph_chevron-right-compact_s" />
          </div>
        </div>
        <Typography.Text view="primary-small" color="secondary">
          Ежемесячный платёж за страхование имущества 200&nbsp;₽ будет добавлен к платежу за ЖКУ
        </Typography.Text>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          Создать шаблон оплаты
        </ButtonMobile>
      </div>
    </>
  );
};
