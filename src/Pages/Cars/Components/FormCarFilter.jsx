import {SelectForm} from "Components";

const filterItem = [
  {
    title: 'brand',
    values: ['BMW', 'bugatti', 'toyota', 'mercedes', 'lamborghini', 'porsche']
  },
  {
    title: 'model',
    values: ['q3', 'a4', 'aventador']
  },
  {
    title: 'body style',
    values: ['buggy', 'sedan', 'SUV', 'van', 'couple']
  },
  {
    title: 'transmission',
    values: ['manual', 'PDK', 'tiptronic']
  },
  {
    title: 'fuel type',
    values: ['petrol', 'diesel', 'electro']
  },
  {
    title: 'seats',
    values: ['2', '4-5']
  },
];
export default function FormCarFilter() {
  return (
    <SelectForm select={filterItem} submitText="filter" titleInside column />
  )
}
