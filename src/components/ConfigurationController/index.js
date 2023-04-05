// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeLeftBar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightBar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="layout-container">
          <div className="layout-inner-container">
            <h1 className="heading">Layout</h1>
            <div className="check-box-container">
              <input
                checked={showContent}
                onChange={onChangeContent}
                className="inputEl"
                id="content"
                type="checkbox"
              />
              <label htmlFor="content" className="label-text">
                Content
              </label>
            </div>

            <div className="check-box-container">
              <input
                checked={showLeftNavbar}
                onChange={onChangeLeftBar}
                className="inputEl"
                id="leftNavbar"
                type="checkbox"
              />
              <label htmlFor="leftNavbar" className="label-text">
                Left Navbar
              </label>
            </div>

            <div className="check-box-container">
              <input
                checked={showRightNavbar}
                onChange={onChangeRightBar}
                className="inputEl"
                id="rightNavbar"
                type="checkbox"
              />
              <label htmlFor="rightNavbar" className="label-text">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext>
)

export default ConfigurationController
