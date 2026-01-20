/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "ChimeraTK-DeviceAccess", "index.html", [
    [ "First steps", "index.html#first_steps", [
      [ "Logical Name Mapping plugins", "index.html#lnm", null ]
    ] ],
    [ "Multi Value Registers (1D Register Accessors)", "accessor1d.html", null ],
    [ "2D Register Accessors", "accessor2d.html", null ],
    [ "Using and creating custom backends", "custom_backends.html", [
      [ "Writing Dummies: Extending the DummyBackend", "custom_backends.html#writing_dummies", null ],
      [ "The Plugin Mechanism", "custom_backends.html#plugin_mechanism", [
        [ "Linking custom backends at compile time (recommended)", "custom_backends.html#linking_backends", null ],
        [ "Loading custom backends at run time", "custom_backends.html#loading_backends", null ],
        [ "Writing your own backed", "custom_backends.html#writing_backends", null ],
        [ "Debian packaging scheme for external backends", "custom_backends.html#backend_packaging_scheme", [
          [ "Usage in the packaging scripts", "custom_backends.html#backend_packaging_usage", null ]
        ] ]
      ] ]
    ] ],
    [ "Data Consistency Group", "data_consistency_group.html", null ],
    [ "Design: AsyncNDRegisterAccessor", "design__async_n_d_register_accessor__numeric_addressed.html", [
      [ "Concept overview", "design__async_n_d_register_accessor__numeric_addressed.html#conceptOverview", [
        [ "AsyncNDRegisterAccessors and the AsyncAccessorManager", "design__async_n_d_register_accessor__numeric_addressed.html#design_AsyncAccessorManager", null ],
        [ "The TriggeredPollDistributor", "design__async_n_d_register_accessor__numeric_addressed.html#design_TriggeredPollDistributor", null ],
        [ "The SubDomain", "design__async_n_d_register_accessor__numeric_addressed.html#design_SubDomain", null ],
        [ "Vision: Using the VariableDistributor DOOCS backend", "design__async_n_d_register_accessor__numeric_addressed.html#design_envisioned_DoocsDistributor", null ]
      ] ],
      [ "The AsyncNDRegisterAccessor and the AsyncAccessorManager", "design__async_n_d_register_accessor__numeric_addressed.html#design_AsyncNDRegisterAccessor", [
        [ "Design decisions and implementation details", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_details", null ],
        [ "Exception handling", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_exceptions", null ],
        [ "Interface for implementing backends", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_usage", null ]
      ] ],
      [ "Implementation in the NumericAddressedBackend", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_NumericAddressedBackend", [
        [ "Asynchronous registers in the map file", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_map_file", [
          [ "Canonical interrupt names", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_canonical_interrupt_name", null ]
        ] ]
      ] ]
    ] ],
    [ "Device Mapping", "dmap.html", [
      [ "CimeraTK device descriptor", "dmap.html#The", null ]
    ] ],
    [ "Exceptions and recovery", "exceptions.html", [
      [ "Exceptions", "exceptions.html#Exceptions", null ],
      [ "isFunctional()", "exceptions.html#isFunctional", null ],
      [ "Recovery", "exceptions.html#recovery", [
        [ "Recovery on re-open", "exceptions.html#recover_open", null ],
        [ "Automatic recovery", "exceptions.html#auto_recover", null ],
        [ "No recovery necessary", "exceptions.html#no_recovery", null ]
      ] ]
    ] ],
    [ "Logical Name Mapping Backend", "lmap.html", [
      [ "CDD syntax", "lmap.html#cdd", null ],
      [ "Map file syntax", "lmap.html#map", [
        [ "Variables and constants", "lmap.html#variables_and_constants", null ],
        [ "Self-referencing redirects", "lmap.html#internal_redirect", null ]
      ] ],
      [ "Accessor plugins", "lmap.html#plugins", [
        [ "List of plugins", "lmap.html#plugins_reference", [
          [ "multiply", "lmap.html#plugins_reference_multiply", null ],
          [ "math", "lmap.html#plugins_reference_math", null ],
          [ "forceReadOnly", "lmap.html#plugins_reference_force_read_only", null ],
          [ "forcePollingRead", "lmap.html#plugins_reference_force_polling_read", null ],
          [ "monostableTrigger", "lmap.html#plugins_reference_monostable_trigger", null ],
          [ "typeHintModifier", "lmap.html#plugins_reference_type_hint_modifier", null ],
          [ "Double Buffering plugin for the Logical Name Mapper", "lmap.html#double_buffering_plugin", null ],
          [ "bitRange", "lmap.html#plugins_reference_bit_range", null ]
        ] ],
        [ "tagModifier", "lmap.html#plugins_reference_tag_modifier", null ],
        [ "isStatusOutput", "lmap.html#plugins_reference_is_status_output", null ],
        [ "hasReverseRecovery", "lmap.html#plugins_reference_is_reverse_recovery", null ],
        [ "fanOut", "lmap.html#plugins_reference_fanout", null ]
      ] ]
    ] ],
    [ "Basic Example", "basic_example.html", null ],
    [ "Accessing numeric-addressed registers without a map file", "numeric_addresses.html", null ],
    [ "Questions and Answers", "q_and_a.html", [
      [ "Why do RegisterAccessors not have an assignment operator for other RegisterAccessors?", "q_and_a.html#why_no_accessor_assignment", [
        [ "Details:", "q_and_a.html#q_and_a_details", null ]
      ] ],
      [ "Why can I not read SEQUENCE registers?", "q_and_a.html#use_sequences", null ]
    ] ],
    [ "Technical specification: Mapping of DataConsistencyKeys to VersionNumbers V0.0WIP", "spec__data_consistency_key_mapping.html", null ],
    [ "Technical specification DeviceBackend", "spec__device_backend.html", null ],
    [ "Technical specification: TransferElement V1.2", "spec__transfer_element.html", null ],
    [ "Testing applications using the DummyBackends", "testing_with_dummy_backends.html", [
      [ "Specifying the dummies in the device map file", "testing_with_dummy_backends.html#dmap_specify_dummies", null ],
      [ "Writeing to read-only registers", "testing_with_dummy_backends.html#dummy_backends_write_readonly", null ]
    ] ],
    [ "Using push-type inputs with AccessMode::wait_for_new_data", "wait_for_new_data.html", null ],
    [ "XDMA backend", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html", [
      [ "Prerequisites", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md17", null ],
      [ "Mapping of XDMA driver interfaces", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md18", [
        [ "AXI-Lite Master interface", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md19", null ],
        [ "AXI MM DMA interface", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md20", null ],
        [ "Interrupt lines (events)", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md21", null ]
      ] ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Concepts", "concepts.html", "concepts" ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"_access_mode_8cc.html",
"_l_n_m_backend_register_info_8h.html",
"_supported_user_types_8h.html#abe698a21f62a02296a12b08433b980dc",
"class_catalogue_generator.html#a90ba0815da6d1695b7011f30a75ebaeb",
"class_chimera_t_k_1_1_data_consistency_group.html#a809c6d89449f58df355e395d08a67fa5",
"class_chimera_t_k_1_1_device.html#aa43e1797a29c2bfcfa8d370cbc389cc1",
"class_chimera_t_k_1_1_dummy_backend.html#a8ff43143f271f34f948afa5861ddb06b",
"class_chimera_t_k_1_1_fixed_point_converter.html#a1a73daf593561ffea55703d207cb9275",
"class_chimera_t_k_1_1_l_n_m_backend_1_1_math_plugin_formula_helper.html",
"class_chimera_t_k_1_1_l_n_m_backend_variable_accessor.html#a05da365b1ca344b7e525b55e581d82db",
"class_chimera_t_k_1_1_n_d_register_accessor_abstractor.html#a8ece47d635962796a10d3d9076f8416c",
"class_chimera_t_k_1_1_numeric_addressed_low_level_transfer_element.html#a4049a2c2ae018685941120ecfb040a29",
"class_chimera_t_k_1_1_read_any_group.html#aa39feaeaa501c009b3bcd90b7304445d",
"class_chimera_t_k_1_1_register_info.html#adff51ba5bd6b966dae36fe56495eafcc",
"class_chimera_t_k_1_1_subdevice_register_accessor.html#a17939a8ca69c2674a3c0aea5627077fe",
"class_chimera_t_k_1_1_transfer_element_i_d.html#a1786e4f964aeea0cdb1004ed61c3a8da",
"class_chimera_t_k_1_1_type_changing_range_checking_decorator.html#a678d7f2286d88005d891bae1a88fa116",
"class_chimera_t_k_1_1_unified_backend_test.html#af206fd074baa70192b00859ea5cc563c",
"class_chimera_t_k_1_1async_1_1_domain_impl.html#a4e555481290405a30d87a3215bfd0268",
"class_chimera_t_k_1_1const___backend_register_catalogue_impl_iterator.html#a45032fcf22c49656cfee12bcecc6db94",
"class_test_dummy.html",
"functions_w.html",
"namespace_chimera_t_k_1_1_utilities.html#a2eee1bba7066a6d441061840f63ccd6d",
"struct_bool_as_void.html#a1d58a0c9109bfa2f38513fab38b2643f",
"struct_chimera_t_k_1_1_i_e_e_e754___single_converter_1_1vector_to_cooked__impl_3_01std_1_1stringe140701d1fc3bce216e21ed8ed60bd7e.html",
"struct_chimera_t_k_1_1_opaque_struct_header.html#a9a53158fad8a14ccd46a7013edfdd854",
"struct_chimera_t_k_1_1async_1_1_async_variable_impl.html#a43380c6c95022938581db8e903b5274b",
"struct_integers_base.html#a87321045c5f74d7724e35f2aa471a1a2",
"struct_reg_channel3.html#a7976ae4e9430828b560be840e010d102",
"struct_regs3_type.html",
"structdevice__rw.html#aa58fc57c81226301a5a6ddc9dabe6f17",
"test_generic_muxed_interrupt_distributor_8cpp.html#a76356d000c78a74578e5125feb7360bb",
"test_pcie_error_handling_8cpp.html",
"test_utilities_8cpp.html#abf6a226bc67552e83dc572c4de7bd3f4"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';