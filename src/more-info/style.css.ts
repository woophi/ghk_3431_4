import { style } from '@vanilla-extract/css';

const imgBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  borderRadius: '1rem',
  backgroundColor: '#F3F4F5',
  alignItems: 'center',
  textAlign: 'center',
  padding: '1rem .5rem 0',
  marginBottom: '1rem',
});

const row = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '.5rem',
});

export const miSt = {
  imgBox,
  row,
};
