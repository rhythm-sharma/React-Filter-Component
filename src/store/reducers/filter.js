import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    tagOptions: ["Tag 1", "Tag 2"],
    userOptions: ["Me", "Rhythm"],
    filter: {
      filterGroupOps: "AND",
      fields: [
        {
          group: false,
          field: null,
          operation: null,
          values: null,
          key: uuid(),
        },
      ],
    },
  },
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
    updateFilterGroupOps: (state, action) => {
      state.filter.filterGroupOps = action.payload;
    },
    updateChildFilterGroupOps: (state, action) => {
      const { index, newValue } = action.payload;
      state.filter.fields[index].filterGroupOps = newValue;
    },
    updateOnAddFilter: (state, action) => {
      state.filter.fields = [
        ...state.filter.fields,
        {
          group: false,
          field: null,
          operation: null,
          values: null,
          key: uuid(),
        },
      ];
    },
    updateOnAddChildFilter: (state, action) => {
      // action.payload is index
      state.filter.fields[action.payload].fieldGroup = [
        ...state.filter.fields[action.payload].fieldGroup,
        {
          field: null,
          operation: null,
          values: null,
          key: uuid(),
        },
      ];
    },
    updateOnAddGroup: (state, action) => {
      state.filter.fields = [
        ...state.filter.fields,
        {
          group: true,
          filterGroupOps: "AND",
          key: uuid(),
          fieldGroup: [
            {
              field: null,
              operation: null,
              values: null,
              key: uuid(),
            },
          ],
        },
      ];
    },
    updateOnFilterValueChange: (state, action) => {
      const { index, newValue } = action.payload;
      state.filter.fields[index] = {
        ...state.filter.fields[index],
        ...newValue,
      };
    },
    updateOnChildFilterValueChange: (state, action) => {
      const { index, childIndex, newValue } = action.payload;
      state.filter.fields[index].fieldGroup[childIndex] = {
        ...state.filter.fields[index].fieldGroup[childIndex],
        ...newValue,
      };
    },
    deleteFilter: (state, action) => {
      const { index } = action.payload;
      state.filter.fields.splice(index, 1);
    },
    deleteChildFilter: (state, action) => {
      const { index, childIndex } = action.payload;
      // the below condition means the last child filter is remaining
      if (state.filter.fields[index].fieldGroup.length === 1) {
        state.filter.fields.splice(index, 1);
      } else {
        state.filter.fields[index].fieldGroup.splice(childIndex, 1);
      }
    },
    updateTagOptions: (state, action) => {
      state.tagOptions = action.payload;
    },
    clearAllFilters: (state, action) => {
      state.filter.fields = [];
    },
    clearAllGroupFilters: (state, action) => {
      state.filter.fields.splice(action.payload, 1);
    },
    addTags: (state, action) => {
      state.tagOptions = [...state.tagOptions, action.payload];
    },
    addUsers: (state, action) => {
      state.userOptions = [...state.userOptions, action.payload];
    },
  },
});

export const {
  updateFilter,
  updateFilterGroupOps,
  updateChildFilterGroupOps,
  updateOnAddFilter,
  updateOnAddGroup,
  updateOnAddChildFilter,
  updateOnFilterValueChange,
  updateOnChildFilterValueChange,
  deleteFilter,
  deleteChildFilter,
  updateTagOptions,
  clearAllFilters,
  clearAllGroupFilters,
  addUsers,
  addTags,
} = filterSlice.actions;

export default filterSlice.reducer;

// {
//     "filterGroupOps": "OR",
//     "fields": [
//         {
//             "group": false,
//             "field": "",
//             "operation": "",
//             "values": ""
//         },
//         {
//             "group": false,
//             "field": "",
//             "operation": "",
//             "values": ""
//         },
//         {
//             "group": false,
//             "field": "",
//             "operation": "",
//             "values": ""
//         },
//         {
//             "group": true,
//             "filterGroupOps": "AND",
//             "fieldGroup": [
//                 {
//                     "field": "",
//                     "operation": "",
//                     "values": ""
//                 },
//                 {
//                     "field": "",
//                     "operation": "",
//                     "values": ""
//                 },
//                 {
//                     "field": "",
//                     "operation": "",
//                     "values": ""
//                 }
//             ]
//         },
//         {
//             "group": false,
//             "field": "",
//             "operation": "",
//             "values": ""
//         },
//         {
//             "group": true,
//             "filterGroupOps": "OR",
//             "fieldGroup": [
//                 {
//                     "field": "",
//                     "operation": "",
//                     "values": ""
//                 },
//                 {
//                     "field": "",
//                     "operation": "",
//                     "values": ""
//                 },
//                 {
//                     "field": "",
//                     "operation": "",
//                     "values": ""
//                 }
//             ]
//         }
//     ]
// }
