import sum from 'lodash/sum';
import { useCallback, useEffect } from 'react';
// form
import { useFormContext, useFieldArray } from 'react-hook-form';
// @mui
import { Box, Stack, Button, Divider, Typography, InputAdornment, MenuItem } from '@mui/material';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/iconify';
import { RHFSelect, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

export default function TourNewEditDetails() {
  const { control, setValue, watch, resetField } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  }) ;

  const values = watch();






  const handleAdd = () => {
    append({
      title: '',
      description: '',
    });
  };

  const handleRemove = (index) => {
    remove(index);
  };



  // const handleChangeTitle = useCallback(
  //   (event, index) => {
  //     setValue(`items[${index}].title`, String(event.target.value));
  //     setValue(
  //       `items[${index}].total`,
  //       values.items.map((item) => item.quantity * item.title)[index]
  //     );
  //   },
  //   [setValue, values.items]
  // );
  // const handleChangeDescription = useCallback(
  //   (event, index) => {
  //     setValue(`items[${index}].description`, String(event.target.value));
  //     setValue(
  //       `items[${index}].total`,
  //       values.items.map((item) => item.quantity * item.description)[index]
  //     );
  //   },
  //   [setValue, values.items]
  // );

  return (
    <Box sx={{ p: 3 }}>

      <Stack divider={<Divider flexItem sx={{ borderStyle: 'dashed' }} />} spacing={3}>
        {fields.map((item, index) => (
          <Stack key={item.id} alignItems="flex-end" spacing={1.5}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ width: 1 }}>
              <RHFTextField
                
                name={`items[${index}].title`}
                label="Title"
                InputLabelProps={{ shrink: true }}
              />
              <RHFTextField
                
                name={`items[${index}].description`}
                label="Description"
                InputLabelProps={{ shrink: true }}
              />
            </Stack>

            <Button
              
              color="error"
              startIcon={<Iconify icon="eva:trash-2-outline" />}
              onClick={() => handleRemove(index)}
            >
              Remove
            </Button>
          </Stack>
        ))}
      </Stack>

      <Divider sx={{ my: 3, borderStyle: 'dashed' }} />

      <Stack
        spacing={2}
        direction={{ xs: 'column-reverse', md: 'row' }}
        alignItems={{ xs: 'flex-start', md: 'center' }}
      >
        <Button
          
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={handleAdd}
          sx={{ flexShrink: 0 }}
        >
          Add Day
        </Button>

        <Stack
          spacing={2}
          justifyContent="flex-end"
          direction={{ xs: 'column', md: 'row' }}
          sx={{ width: 1 }}
        >
          <RHFTextField
            
            label="description"
            name="description"
            onChange={(event) => setValue('description', String(event.target.value))}
            sx={{ maxWidth: { md: 200 } }}
          />

          <RHFTextField
            
            label="title"
            name="title"
            onChange={(event) => setValue('title', String(event.target.value))}
            sx={{ maxWidth: { md: 200 } }}
          />
        </Stack>
      </Stack>

      <Stack spacing={2} sx={{ mt: 3 }}>
      </Stack>
    </Box>
  );
}
