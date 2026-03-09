# 🌟 Welcome To (সহজ সরল সিম্পল) Assignment - 5

# **📅 Deadline For 60 marks:** 9th March, 2026 (11:59 pm ⏱️)  
#  📅 No Deadline For 50 marks  
# **📅 Deadline For 30 marks:** Any time after 9th March.

---

# Assignment-05: GitHub Issues Tracker


### **API Endpoints:**
###  **All Issues:** 
  - https://phi-lab-server.vercel.app/api/v1/lab/issues 


###  **Single Issue:**
   - https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

   - Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33


###  **Search Issue:** https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

   - Example:  https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications


---

## 📝 Main Requirements

## 🎨 Design Part

## Login Page
- Create a login page containing a logo, title, and sub-title
- Below that, there will be 2 inputs, a sign-in button, and a demo credential to sign in. Follow the Figma for this page 
- Styled as per Figma

## Main Page: 

### Navbar: 

- Navbar with website logo/name on the left
- Search input and button on the right

### Tab Section like Figma: 

- 3 tab ( All, Open, Closed) at the top of this section.(**All**, **Open**, **Closed**)

- Below the tab, there will be an icon, the issue count, some text on the left, and an open and closed marker on the right

- Responsiveness: The website should be responsive for mobile devices. It is totally up to you. 


--- 


## ⚙️ Functionalities
- In login page, there will be default admin credentials (username, password). You need to sign in using these credentials.

- Load all issues and display as per Figma

- On clicking on an open or closed tab, it will load the issues data of the related tab and show it in a display-like card in a 4-column layout like Figma. By default, it will show all data 

- Each card shows:
  - Title
  - Description
  - Status
  - Category
  - Author
  - Priority
  - Label
  - CreatedAt
- Clicking on an issue  card will open a modal and show all the information about that Issue. 

### 🚀 Challenges


- Show the card Top border based on their category(open, closed), open card will have Green Boder, closed card will have a purple border on top. 

- Loading spinner on data load

- Show active button on changing category names

- Implement Search Functionality and 8 meaningful github commit.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 
    - 1️⃣ What is the difference between var, let, and const?

  ## var
   A variable declaration in JavaScript that is function-scoped, can be re-declared.

  ## let
    A variable declaration that is block-scoped, cannot be re-declared in the same scope, but its value can be re-assigned.

  ## const
   A variable declaration that is block-scoped, cannot be re-declared, and its value cannot be re-assigned after initialization.

    -   What is the spread operator (...)?

      JavaScript-এ spread operator (...) use kora hoi array ba object er elements/properties alada kore (expand kore) onno kuno array ba object er valuse bosanur jonne.

    - 3️⃣ What is the difference between map(), filter(), and forEach()?

    ## map()
     - map() array er protiti element er upor function calai and new  array return kore.

    ## filter()
    - filter() condition onujayi array Thake matching elements nie new array return kore.

    ## forEach()
    - forEach() array এর protit element er upor function calai kintu kuno calai array return kore.

    - 4️⃣ What is an arrow function?

    - Arrow function holo JavaScript- er ekti short syntax function, ja => sing die use kora hoi. eti mainly function likhte help kore . eti normal function er tulonai onnketa choto and clean code. 


    - 5️⃣ What are template literals?
    - Template literals holo JavaScript-এ string  lekher ekti upai jeikhne backtick ( ) use kora hoi and ${} die variable  baexpression simply string er modde addition kora jai. 


---

## 🛠️ Technology Stack

- **HTML**
- **CSS** (Vanilla/Tailwind/DaisyUI)
- **JavaScript** (Vanilla)

---

## 🔑 Demo Credentials

```text
Username: admin
Password: admin123
```


---

### Optional: 
 - No need to show status: Open, Closed styles On modals. 
 - No Need to show icon on labels 
 - No need to apply styles on Priority 
--- 


## 📤 What to submit

- **GitHub Repository Link:**
- **Live Site Link:**

---


