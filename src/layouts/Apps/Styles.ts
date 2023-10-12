import styled from "styled-components"

import { colors } from "@utils/styles"

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2.5rem;
`

export const StyledSearchInput = styled.input`
  max-width: 25rem;
  width: 95%;
  height: 2rem;
  padding: 1rem;
  border: 2px solid ${colors.textMedium};
  border-radius: 100rem;

  &:focus {
    outline: none;
  }
`
