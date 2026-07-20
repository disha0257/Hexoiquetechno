import Contact from "../models/Contact.js";


// ==========================================
// CREATE CONTACT REQUEST
// POST /api/contact
// ==========================================

export const createContact = async (req, res) => {

  try {

    // ==========================================
    // GET FORM DATA
    // ==========================================

    const {
      name,
      email,
      company,
      phone,
      message,
    } = req.body;


    // ==========================================
    // DEBUG DATA
    // ==========================================

    console.log(
      "Received Contact Data:",
      {
        name,
        email,
        company,
        phone,
        message,
      }
    );


    // ==========================================
    // VALIDATE REQUIRED FIELDS
    // ==========================================

    if (
      !name ||
      !email ||
      !company ||
      !phone ||
      !message
    ) {

      return res.status(400).json({

        success: false,

        message:
          "All fields are required",

      });

    }


    // ==========================================
    // CLEAN DATA
    // ==========================================

    const cleanData = {

      name: name.trim(),

      email: email.trim().toLowerCase(),

      company: company.trim(),

      phone: phone.trim(),

      message: message.trim(),

    };


    // ==========================================
    // SAVE TO MONGODB
    // ==========================================

    const newContact = await Contact.create(

      cleanData

    );


    console.log(

      "Contact Saved Successfully:",

      newContact._id

    );


    // ==========================================
    // SUCCESS RESPONSE
    // ==========================================

    return res.status(201).json({

      success: true,

      message:
        "Contact request submitted successfully",

      data: newContact,

    });


  }

  catch (error) {


    // ==========================================
    // PRINT REAL ERROR
    // ==========================================

    console.error(

      "CONTACT SAVE ERROR:",

      error

    );


    // ==========================================
    // MONGOOSE VALIDATION ERROR
    // ==========================================

    if (

      error.name ===

      "ValidationError"

    ) {

      const validationErrors =

        Object.values(

          error.errors

        ).map(

          (err) => err.message

        );


      return res.status(400).json({

        success: false,

        message:

          validationErrors.join(", "),

      });

    }


    // ==========================================
    // SERVER ERROR
    // ==========================================

    return res.status(500).json({

      success: false,

      message:

        error.message ||

        "Something went wrong while saving contact request",

    });

  }

};