import React from 'react';
import CatalogSelects from "../Catalogselects/CatalogSelects";
import RangeInput from "../Catalogselects/RangeInput";
import CatalogButton from "../Catalogselects/CatalogButton";

const CatalogFilter = ({sort, setSort, category, setCategory, slider, setSlider}) => {
    return (
        <div className="catalog__filter">
            <div className="catalog__filter-selects">
                <CatalogSelects title='Категория' state={category} setState={setCategory} array={[]}/>
                <CatalogSelects/>
            </div>

            <div className="catalog__filter-range">
                <RangeInput/>
            </div>
            <div className="catalog__filter-prices">
                <div className="catalog__filter-prices__price">2000₽</div>
                -
                <div className="catalog__filter-prices__price">10000₽</div>
            </div>
            <div className="catalog__filter-button">
                <CatalogButton/>
            </div>
        </div>
    );
};

export default CatalogFilter;