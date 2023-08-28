import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { isAuth, getCookie } from "../../actions/auth";
import { create, getTags, removeTag } from "../../actions/tag";

const Tag = () => {
    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        tags: [],
        removed: false,
        reload: false
    })

    const { name, error, success, tags, removed, reload } = values
    const token = getCookie('token')

    useEffect(() => {
        loadTags()
    }, [reload])

    const loadTags = () => {
        getTags().then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setValues({ ...values, tags: data })
            }
        })
    }

    const showTags = () => {
        return tags.map((c, i) => {
            return <button key={i} onDoubleClick={() => deleteConfirm(c.slug)} title="Double click to delete" className='tag tag-all ms-1 me-1 mt-3'>
                {c.name}
            </button>
        })
    }

    const deleteConfirm = slug => {
        let answer = window.confirm("Are you sure you want to delete this tag?")
        if (answer) {
            deleteTag(slug)
        }
    }

    const deleteTag = slug => {
        removeTag(slug, token).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload })
            }
        })
    }

    const clickSubmit = (e) => {
        e.preventDefault()
        //console.log('create category',name)
        create({ name }, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false })
            } else {
                setValues({ ...values, name: '', error: false, success: true, removed: !removed, reload: !reload })
            }
        })
    }

    const handleChange = e => {
        setValues({ ...values, name: e.target.value, error: false, success: false, removed: '' })
    }

    const showSuccess = () => {
        if (success) {
            return <p className="show-result">Tag is created</p>
        }
    }

    const showError = () => {
        if (error) {
            return <p className="show-result">Tag already exist</p>
        }
    }

    const showRemoved = () => {
        if (removed) {
            return <p className="show-result">Tag is removed</p>
        }
    }

    const mouseMoveHandler = e => {
        setValues({ ...values, error: false, success: false, removed: false, reload: false })
    }

    const newTagForm = () => {
        return (
            <form onSubmit={clickSubmit}>
                <div className="form-group">
                    <label className="main-head mb-2">Name</label>
                    <input type='text' className="form-control" onChange={handleChange} value={name} required />
                </div>
                <div>
                    <button type='submit' className="btn btn-dark mt-3">Create</button>
                </div>
            </form>
        )
    }

    return (<>
        {showSuccess()}
        {showError()}
        {showRemoved()}
        <div onMouseMove={mouseMoveHandler}>
            {newTagForm()}
            <div className="d-flex flex-wrap">
                {showTags()}
            </div>
        </div>
    </>)
}

export default Tag