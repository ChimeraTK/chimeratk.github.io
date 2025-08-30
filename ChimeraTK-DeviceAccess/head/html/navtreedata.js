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
"_l_n_m_backend_channel_accessor_8h.html#aff96b5b96f07b7d89a63107cc11ce264",
"_supported_user_types_8h.html#ae7a87d6ef5da36852a971cab2ac6eddc",
"class_chimera_t_k_1_1_access_mode_flags.html",
"class_chimera_t_k_1_1_data_consistency_group.html#abce53bc4f2979ff64f30da01d799397babe4e3ce96e26f1bdbd090b9f725e7375",
"class_chimera_t_k_1_1_device.html#ad7c7d319aa029ecdb9a1e5aae5e667af",
"class_chimera_t_k_1_1_dummy_backend_base.html#a03eb07121bb5cd00f88723c9ee189e0e",
"class_chimera_t_k_1_1_fixed_point_converter.html#a617008796d4d49974a7c85e84b9800a3",
"class_chimera_t_k_1_1_l_n_m_backend_1_1_math_plugin.html#aeaca0eb9625551eecc1b5c13aaaac1a0",
"class_chimera_t_k_1_1_l_n_m_backend_variable_accessor.html#a34307ddff43c6c4bcbef9c341a670da7",
"class_chimera_t_k_1_1_n_d_register_accessor_abstractor.html#ab6194911c234927ca324f9a83f25c5d5",
"class_chimera_t_k_1_1_numeric_addressed_low_level_transfer_element.html#a6fd9333024437258f3efc021ffca8814",
"class_chimera_t_k_1_1_read_any_group.html#ae58487570b91913f2ce2c386b1aae0e3",
"class_chimera_t_k_1_1_register_path.html#a0c915c3fd599c55da0c04fb127dd4c86",
"class_chimera_t_k_1_1_subdevice_register_accessor.html#a6539a5720c6f84b09a7a2f565fb47ae4",
"class_chimera_t_k_1_1_transfer_element_i_d.html#a7d334f85bce936e449c91f06f0bc123a",
"class_chimera_t_k_1_1_type_changing_range_checking_decorator_3_01_chimera_t_k_1_1_void_00_01_i_m_p_l___t_01_4.html",
"class_chimera_t_k_1_1_version_number.html",
"class_chimera_t_k_1_1async_1_1_domain_impl.html#aded20692e4b5cee7cc639ef6bce54b2f",
"class_chimera_t_k_1_1const___backend_register_catalogue_impl_iterator.html#ac9069739a614d246f15147cc6e377648",
"class_testable_dummy_backend.html#a700d30cdd5eb816885775713e7274f4a",
"globals_defs_r.html",
"namespace_chimera_t_k_1_1async.html#a3089c365fce6a50a562b7b38549fa36bae5a40f1c66326bdd4d84e01b832f0521",
"struct_byte_raw__fixed_point8__4u.html#a85e956d0a6cf0cbed017c17dfd2ba408",
"struct_chimera_t_k_1_1_img_header.html#aaf9a47e6519ebbc4be090577b759e401",
"struct_chimera_t_k_1_1_rebot_protocol0.html#a44d6d2c5bfc5198c7b160a36f534308a",
"struct_chimera_t_k_1_1async_1_1_async_variable_impl.html#abad60a83ccf5b32fc9e63e44942238dc",
"struct_integers_base.html#aed514049c981187df54f85ed5be65c65",
"struct_reg_channel4__push.html#aa7bff10607b7dae9d99593636ec44462",
"struct_regs3_type.html#ac463042740c3663b457e8b7af84771e7",
"structstd_1_1formatter_3_01_chimera_t_k_1_1_version_number_00_01_char_t_01_4.html#a9ce2bf0b1226d5f933a43360a1c70e37",
"test_generic_muxed_interrupt_distributor_8cpp.html#ae076f8c4c5f7b7fbe250651e22358432",
"test_rebot_backend_creation_8cpp.html",
"testable_rebot_sleep_8h.html#a1851c267e4dd419a948306ff85195a86"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';