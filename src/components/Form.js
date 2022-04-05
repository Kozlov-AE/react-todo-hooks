import React from "react";

export function AddForm () {
    return (
        <div className="row py-2">
            <div className="col">
                <input type="text" class="form-control" placeholder="Введите задачу" aria-label="Input task" />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Ok</button>
            </div>
        </div>
    );
}