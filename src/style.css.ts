import { globalStyle, style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '1rem',
  border: '1px solid #F3F4F5',
  backgroundColor: '#F3F4F5',
});
const boxInner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem 1rem 0',
});

const hr = style({
  borderBottom: '1px solid #F3F4F5',
});
const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const switchItem = style({});

globalStyle(`${switchItem} > span > span:first-child`, {
  fontWeight: 500,
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  switchItem,
  boxInner,
  hr,
};
