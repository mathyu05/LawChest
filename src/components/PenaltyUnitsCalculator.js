import React from "react";
import { useState } from "react";
import Select from "react-select";
import Data from "../../content/data.json";

var moment = require('moment');

const PenaltyUnitsCalculator = () =>
{
  const [_formVisible, setFormVisible] = useState(true);
  const [_jurisdiction, setJurisdiction] = useState({ value: null, label: null });
  const [_maximumPenaltyUnits, setMaximumPenaltyUnits] = useState();
  const [_dayOfOffending, setDayOfOffending] = useState({ value: null, label: null });
  const [_monthOfOffending, setMonthOfOffending] = useState({ value: null, label: null });
  const [_yearOfOffending, setYearOfOffending] = useState({ value: null, label: null });
  const [_relevantPenaltyUnitMultiplier, setRelevantPenaltyUnitMultiplier] = useState();

  const handleSubmit = (e) =>
  {
    const dateOfOffending = moment(_yearOfOffending.value + "-" + _monthOfOffending.value + "-" + _dayOfOffending.value, 'YYYY-MMM-DD');
    const pums = Data.PenaltyUnitMultipliers.filter(e => e.JurisdictionId === _jurisdiction.value).sort(e => e.CommencementDate);
    let lowestDifference = null;
    let actualPum = null;

    for (let i = 0; i < pums.length; ++i)
    {
      const pum = pums[i];
      const pumCommencementDate = moment(pum.CommencementDate, 'YYYY-MM-DD');

      if (pumCommencementDate.isAfter(dateOfOffending))
      {
        continue;
      }

      const difference = moment.duration(dateOfOffending.diff(pumCommencementDate));

      if (lowestDifference === null || difference.asMilliseconds() < lowestDifference.asMilliseconds())
      {
        lowestDifference = difference;
        actualPum = pum;
      }
    }

    setRelevantPenaltyUnitMultiplier(actualPum);
    setFormVisible(!_formVisible);
  };

  const newCalculation = () =>
  {
    setFormVisible(!_formVisible);
  };

  return (
    <div>
      {
        _formVisible &&
        <form
          onSubmit = { handleSubmit }
          style =
          {
            {
              display: "grid",
              gridTemplateColumns: "100px 200px 150px",
              gridColumnGap: "10px",
              gridTemplateRows: "20px 40px 20px 40px 20px 40px 40px",
              gridRowGap: "20px"
            }
          }>
          <label
            htmlFor = "jurisdiction"
            style =
            {
              {
                gridRow: "1",
                gridColumn: "1 / 4"
              }
            }>
            Jurisdiction
          </label>
          <div
            style =
            {
              {
                gridRow: "2",
                gridColumn: "1 / 4"
              }
            }>
            <Select
              id = "jurisdiction"
              options = { Data.Jurisdictions }
              defaultValue = { _jurisdiction }
              onChange = { e => setJurisdiction(e) }
              selec
            />
          </div>
          <label
            htmlFor = "maximumPenaltyUnits"
            style =
            {
              {
                gridRow: "3",
                gridColumn: "1 / 4"
              }
            }>
            Maximum Penalty Units
          </label>
          <input
            id = "maximumPenaltyUnits"
            type = "number"
            defaultValue = { _maximumPenaltyUnits }
            onChange = { e => setMaximumPenaltyUnits(e.target.valueAsNumber) }
            style =
            {
              {
                gridRow: "4",
                gridColumn: "1 / 4"
              }
            }
          />
          <label
            htmlFor = "dateOfOffending"
            style =
            {
              {
                gridRow: "5",
                gridColumn: "1 / 4"
              }
            }>
            Date of Offending
          </label>
          <div
            style = 
            {
              {
                gridRow: "6",
                gridColumn: "1"
              }
            }>
            <Select
              options = { Data.Days }
              defaultValue = { _dayOfOffending }
              placeholder = "Day"
              onChange = { e => setDayOfOffending(e) }
            />
          </div>
          <div
            style = 
            {
              {
                gridRow: "6",
                gridColumn: "2"
              }
            }>
            <Select
              options = { Data.Months }
              defaultValue = { _monthOfOffending }
              placeholder = "Month"
              onChange = { e => setMonthOfOffending(e) }
            />
          </div>
          <div
            style = 
            {
              {
                gridRow: "6",
                gridColumn: "3"
              }
            }>
            <Select
              options = { Data.Years }
              defaultValue = { _yearOfOffending }
              placeholder = "Year"
              onChange = { e => setYearOfOffending(e) }
            />
          </div>
          <button
            type = "submit"
            style =
            {
              {
                gridRow: "7",
                gridColumn: "1 / 4"
              }
            }>
            Calculate
          </button>
        </form>
      }
      {
        !_formVisible &&
        <div
          style =
          {
            {
              background: "lightblue",
              padding: "25px"
            }
          }>
          <div>
            <p>
              In { _jurisdiction.label }, an offence taking place on { _dayOfOffending.value }-{ _monthOfOffending.value }-{ _yearOfOffending.value } with the maximum penalty unit of { _maximumPenaltyUnits } could result in a fine of:
            </p>
            <h1>
              ${ _relevantPenaltyUnitMultiplier.Value * _maximumPenaltyUnits }
            </h1>
            {
              _relevantPenaltyUnitMultiplier !== null &&
              <p>
                Refer to the relevant authority document here:
                { ' ' }
                <a
                  href = { _relevantPenaltyUnitMultiplier.AuthorityLink }
                  target = "_blank"
                  rel = "noopener noreferrer">
                    { _relevantPenaltyUnitMultiplier.AuthorityName }
                  </a>.
              </p>
            }
            <button
              onClick = { newCalculation }>
              New Calculation
            </button>
          </div>
        </div>
      }
    </div>
  );
}

export default PenaltyUnitsCalculator