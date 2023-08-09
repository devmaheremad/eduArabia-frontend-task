// import React, { useState } from "react";
import React from 'react'
import { Container, Stack, Typography } from '@mui/material'
import {
  BreadcrumbsParent,
  HeadBtnsTable,
  // Input,
  MainCard,
  PrintButton,
} from '../../custom'
import { useTranslation } from 'react-i18next'
import EnhancedTable from './EnhancedTable'
import Zoom from '@mui/material/Zoom'
import { FilterIcon, PlusIcon, XLSIcon } from '../../icons'

const ExhibitionsList = () => {
  const { t } = useTranslation()

  // const [info, setInfo] = useState({});

  const [checked, setChecked] = React.useState(false)

  const handleClick = () => {
    setChecked((prev) => !prev)
  }

  return (
    <Container maxWidth="xl" sx={{ pt: '70px' }}>
      <BreadcrumbsParent title={t('exhibitions')} sx={{ mb: '55px' }} />
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
            {t('exhibitionsList')}
          </Typography>
          <Stack>
            <Stack direction={'row'} flexWrap={'wrap'} gap={'9px'}>
              <HeadBtnsTable
                svgIcon={<FilterIcon />}
                onClick={handleClick}
                variant="outlined"
              />
              <HeadBtnsTable svgIcon={<PlusIcon />} />
              <PrintButton>
                <EnhancedTable />
              </PrintButton>
              <HeadBtnsTable svgIcon={<XLSIcon />} color="success" />
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

export default ExhibitionsList
