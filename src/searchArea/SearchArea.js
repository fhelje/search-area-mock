import React from "react";
import styled from "styled-components";
import FilterButton from "./components/FilterButton";
import { themedColors } from "./components/colorVariants";
import faTrashAlt from "@fortawesome/fontawesome-free-solid/faTrashAlt";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  margin: 1rem;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  display: grid;
  grid-template-rows: auto auto;
`;

const SearchFilters = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  background-color: white;
  padding: 1rem;
`;

const SearchUsedFilters = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  padding: 1rem;
  background-color: white;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 0.5rem;
`;

const FilterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
  & > * {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const FilterLabel = styled.span`
  font-weight: 700;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  font-size: 1rem;
  border: 1px solid white;
  color: ${props => props.color && themedColors[props.color]};
  &:after {
    content: ":";
  }
`;
export const SearchFilterWrapper = styled.div`
  background-color: lightgray;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ClearAll = styled.div`
  font-weight: 700;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  font-size: 1rem;
  border: 1px solid white;
  color: ${props => props.color && themedColors[props.color]};
`;

const ClearAllLabel = styled.span`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  margin-left: 0.5rem;
`;

const HoverIcon = styled.span`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const SearchArea = () => {
  return (
    <Wrapper>
      <SearchFilters>
        <SearchFilterWrapper />
      </SearchFilters>
      <SearchUsedFilters>
        <FilterLabel color="primary">Selected</FilterLabel>
        <FilterList>
          <FilterButton
            label="Employee"
            value="Pelle"
            color="primary"
            outlined={true}
            filter={true}
          />
          <FilterButton
            label="Employee"
            value="Pelle"
            color="secondary"
            outlined={true}
            filter={true}
          />
          <FilterButton
            label="Date"
            value="All"
            color="secondary"
            outlined={true}
            filter={true}
          />
          <FilterButton label="Employee" color="success" outlined={true} />
          <FilterButton
            label="Employee"
            color="success"
            outlined={true}
            disabled={true}
          />
          <FilterButton
            label="Employee"
            value="Pelle"
            color="warning"
            disabled={true}
          />
          <FilterButton
            label="Employee"
            value="Pelle"
            color="danger"
            outlined={true}
          />
          <FilterButton
            label="Employee"
            value="Pelle"
            color="primary"
            outlined={true}
          />
          <FilterButton
            label="Job Id"
            value="123412"
            color="secondary"
            outlined={true}
          />
          <FilterButton label="Employee" color="success" outlined={true} />
          <FilterButton label="Employee" value="Pelle" color="warning" />
          <FilterButton
            label="Employee"
            value="Pelle"
            color="danger"
            filter={true}
            disabled={true}
          />
          <FilterButton
            label="Employee"
            value="Pelle"
            color="danger"
            filter={true}
            outlined={true}
            disabled={true}
          />
        </FilterList>
        <ClearAll>
          <HoverIcon>
            <FontAwesomeIcon icon={faTrashAlt} />
          </HoverIcon>
          <ClearAllLabel>Clear all filters</ClearAllLabel>
        </ClearAll>
      </SearchUsedFilters>
    </Wrapper>
  );
};

export default SearchArea;
