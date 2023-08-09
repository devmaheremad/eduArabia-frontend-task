// import React, { useState } from "react";
import React from 'react'
import {
  Container,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material'
import {
  BreadcrumbsParent,
  HeadBtnsTable,
  // Input,
  MainCard,
} from '../../custom'
import EnhancedTable from './EnhancedTable'
import Zoom from '@mui/material/Zoom'
import { FilterIcon, PlusIcon } from '../../icons'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const QuestionnairesList = () => {
  const { t } = useTranslation()
  const lang = useSelector((state: any) => state.lang)
  const [sortView, setSortView] = React.useState('viewFromTopToBottom')

  const handleChangeView = (event: SelectChangeEvent) => {
    setSortView(event.target.value as string)
  }

  // const [info, setInfo] = useState({});

  const [checked, setChecked] = React.useState(false)

  const handleClick = () => {
    setChecked((prev) => !prev)
  }

  return (
    <Container maxWidth="xl" sx={{ pt: '70px' }}>
      <BreadcrumbsParent title={t('questionnaires')} sx={{ mb: '55px' }} />
      <MainCard>
        <Stack
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'space-between'}
        >
          <Typography
            fontSize={'36px'}
            fontWeight={500}
            color={'primary'}
            component="h1"
          >
            {t('questionnaires')}
          </Typography>
          <Stack>
            <Stack direction={'row'} flexWrap={'wrap'} gap={'9px'}>
              <FormControl
                sx={{
                  '& .MuiInputBase-root': {
                    height: '50px',
                  },
                }}
              >
                <Select
                  displayEmpty
                  id="viewFromTopToBottomSelect"
                  value={sortView}
                  onChange={handleChangeView}
                >
                  <MenuItem
                    value={'viewFromTopToBottom'}
                    sx={{
                      justifyContent:
                        lang === 'rtl' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    {t('viewFromTopToBottom')}
                  </MenuItem>
                  <MenuItem
                    value={'viewFromBottomToTop'}
                    sx={{
                      justifyContent:
                        lang === 'rtl' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    {t('viewFromBottomToTop')}
                  </MenuItem>
                </Select>
              </FormControl>
              <HeadBtnsTable
                svgIcon={<FilterIcon />}
                onClick={handleClick}
                variant="outlined"
              />
              <HeadBtnsTable svgIcon={<PlusIcon />} />
            </Stack>
          </Stack>
        </Stack>
        <Stack height={checked ? 'auto' : '0px'} mt={'0 !important'}>
          <Zoom
            in={checked}
            style={{
              transitionDelay: checked ? '100ms' : '0ms',
            }}
          >
            <Stack>
              <p>
                Please view Page1 and Page2 (ignore page3 - the filter page)
              </p>
              {/* <Input
								name={"test"}
								value={info}
								setValue={setInfo}
								type={"string"}
							/> */}
            </Stack>
          </Zoom>
        </Stack>
        <EnhancedTable />
      </MainCard>
    </Container>
  )
}

export default QuestionnairesList
