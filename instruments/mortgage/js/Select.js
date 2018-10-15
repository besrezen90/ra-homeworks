

const { Select } = window['antd'];

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}


const Autocomplete = () => (
  <div>
    Тип квартиры:
    <br />
    <Select
    showSearch
    style={{ width: "240px" }}
    defaultValue="on-build-apartment"
    placeholder="Выберите тип квартиры"
    optionFilterProp="children"
    onChange={handleChange}
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
    <Option value="on-build-apartment">Квартира в новостройке</Option>
    <Option value="ready-apartment">Готовая квартира</Option>
    <Option value="country-house">Загородный дом</Option>
    </Select>
  </div>
);
