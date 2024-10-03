import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Divider } from '@alfalab/core-components/divider';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import shield from '../assets/shield.png';
import { appSt } from '../style.css';
import { miSt } from './style.css';

type Props = {
  goBack: () => void;
};

export const MoreInfoLayout = ({ goBack }: Props) => {
  return (
    <>
      <div className={appSt.container}>
        <div className={miSt.imgBox}>
          <Typography.TitleResponsive tag="h1" view="large" font="system" weight="bold">
            Дом под защитой
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            Страхование жилья при оплате ЖКУ
          </Typography.Text>
          <img src={shield} width="100%" />
        </div>
        <Typography.Text tag="p" view="primary-medium" color="secondary" defaultMargins>
          Страхование имущества, отделки и ответственности перед соседями. Осмотр недвижимости не требуется.
        </Typography.Text>
        <div className={miSt.box}>
          <Typography.TitleResponsive tag="h2" view="small" font="system" weight="semibold">
            Что покрывает страхование?
          </Typography.TitleResponsive>

          <div className={miSt.row}>
            <Typography.Text view="primary-medium" color="secondary" weight="medium">
              Внутренняя отделка
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="medium" style={{ flexShrink: 0 }}>
              до 100 000 ₽
            </Typography.Text>
          </div>
          <Divider />
          <div className={miSt.row}>
            <Typography.Text view="primary-medium" color="secondary" weight="medium">
              Ответственность перед соседями
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="medium" style={{ flexShrink: 0 }}>
              до 100 000 ₽
            </Typography.Text>
          </div>
          <Divider />

          <div className={miSt.row}>
            <Typography.Text view="primary-medium" color="secondary" weight="medium">
              Движимое имущество
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="medium" style={{ flexShrink: 0 }}>
              до 100 000 ₽
            </Typography.Text>
          </div>
          <Divider />

          <div className={miSt.row}>
            <Typography.Text view="primary-medium" color="secondary" weight="medium">
              Расходы на гостинницу
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="medium" style={{ flexShrink: 0 }}>
              до 5 000 ₽
            </Typography.Text>
          </div>
          <Divider />

          <div className={miSt.row}>
            <Typography.Text view="primary-medium" color="secondary" weight="medium">
              Расходы на уборку после страхового случая
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="medium" style={{ flexShrink: 0 }}>
              до 3 000 ₽
            </Typography.Text>
          </div>
        </div>
        <Typography.Text view="primary-small" color="secondary">
          Ежемесячный платёж за страхование имущества 200&nbsp;₽ будет добавлен к платежу за ЖКУ
        </Typography.Text>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" onClick={goBack}>
          Вернуться к настройке
        </ButtonMobile>
      </div>
    </>
  );
};
